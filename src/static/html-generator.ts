import { readFile, writeFile, mkdir, copyFile, readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

import { GitDiffParser } from '../shared/git-parser.js';

import { type StaticDiffData } from './export.js';

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico'];

function isImageFile(filePath: string): boolean {
  const ext = extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

export async function generateStaticHtml(outputDir: string): Promise<void> {
  // Read diff data
  const diffDataJson = await readFile(join(outputDir, 'diff-data.json'), 'utf-8');
  const diffData = JSON.parse(diffDataJson) as StaticDiffData;

  // Extract binary files
  await extractBinaryFiles(outputDir, diffData);

  // Copy client assets
  await copyClientAssets(outputDir);

  // Generate HTML with embedded data
  const html = generateHtmlTemplate(diffData);
  await writeFile(join(outputDir, 'index.html'), html, 'utf-8');
}

async function extractBinaryFiles(outputDir: string, diffData: StaticDiffData): Promise<void> {
  const imagesDir = join(outputDir, 'images');
  await mkdir(imagesDir, { recursive: true });

  const parser = new GitDiffParser();
  const processedFiles = new Set<string>();

  // Process files from both whitespace modes
  const allFiles = [...diffData.ignoreWhitespace.files, ...diffData.showWhitespace.files];

  for (const file of allFiles) {
    if (!isImageFile(file.path) || processedFiles.has(file.path)) {
      continue;
    }
    processedFiles.add(file.path);

    try {
      if (file.status === 'added') {
        // For added files, only get the new version
        const content = await parser.getBlobContent(file.path, diffData.targetCommitish);
        const fileName = `${basename(file.path, extname(file.path))}_new${extname(file.path)}`;
        await writeFile(join(imagesDir, fileName), content);
      } else if (file.status === 'deleted') {
        // For deleted files, only get the old version
        const content = await parser.getBlobContent(file.path, diffData.baseCommitish);
        const fileName = `${basename(file.path, extname(file.path))}_old${extname(file.path)}`;
        await writeFile(join(imagesDir, fileName), content);
      } else if (file.status === 'modified') {
        // For modified files, get both versions
        const [oldContent, newContent] = await Promise.all([
          parser.getBlobContent(file.path, diffData.baseCommitish),
          parser.getBlobContent(file.path, diffData.targetCommitish),
        ]);

        const baseName = basename(file.path, extname(file.path));
        const ext = extname(file.path);
        await writeFile(join(imagesDir, `${baseName}_old${ext}`), oldContent);
        await writeFile(join(imagesDir, `${baseName}_new${ext}`), newContent);
      }
    } catch (error) {
      console.warn(`Failed to extract binary file ${file.path}:`, error);
    }
  }
}

async function copyClientAssets(outputDir: string): Promise<void> {
  const assetsDir = join(outputDir, 'assets');
  await mkdir(assetsDir, { recursive: true });

  // In production, we would copy from dist/client
  // For now, we'll create a placeholder
  const clientDistDir = join(process.cwd(), 'dist', 'client', 'assets');

  try {
    const files = await readdir(clientDistDir);
    for (const file of files) {
      if (typeof file === 'string') {
        await copyFile(join(clientDistDir, file), join(assetsDir, file));
      }
    }
  } catch (error) {
    console.warn('Client assets not found. Run build first.', error);
  }
}

function generateHtmlTemplate(diffData: StaticDiffData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>difit - ${diffData.targetCommitish} vs ${diffData.baseCommitish}</title>
  <link rel="stylesheet" href="./assets/index.css">
  <script>
    // Embed diff data - properly escaped for HTML
    window.__STATIC_DIFF_DATA__ = JSON.parse(${JSON.stringify(JSON.stringify(diffData))});
    // Set static mode flag
    window.__STATIC_MODE__ = true;
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="./assets/index.js"></script>
</body>
</html>`;
}
