import { readFile, writeFile, mkdir, copyFile, readdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

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

  // Copy client assets and get the copied file names
  const { jsFile, cssFile } = await copyClientAssets(outputDir);

  // Copy favicon
  await copyFavicon(outputDir);

  // Generate HTML with correct asset references
  const html = generateHtmlTemplate(diffData, jsFile, cssFile);
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

async function copyClientAssets(outputDir: string): Promise<{ jsFile: string; cssFile: string }> {
  const assetsDir = join(outputDir, 'assets');
  await mkdir(assetsDir, { recursive: true });

  // Find the project root directory relative to this file
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const projectRoot = join(__dirname, '..', '..');
  const clientDistDir = join(projectRoot, 'dist', 'client', 'assets');

  let jsFile = 'index.js';
  let cssFile = 'index.css';

  try {
    const files = await readdir(clientDistDir);
    for (const file of files) {
      if (typeof file === 'string') {
        await copyFile(join(clientDistDir, file), join(assetsDir, file));

        // Track JS and CSS files
        if (file.startsWith('index-') && file.endsWith('.js')) {
          jsFile = file;
        } else if (file.startsWith('index-') && file.endsWith('.css')) {
          cssFile = file;
        }
      }
    }
  } catch (error) {
    console.warn('Client assets not found. Run build first.', error);
  }

  return { jsFile, cssFile };
}

async function copyFavicon(outputDir: string): Promise<void> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const projectRoot = join(__dirname, '..', '..');

  // Copy both light and dark mode favicons
  const favicons = [
    { src: 'favicon.svg', dest: 'favicon.svg' },
    { src: 'favicon-white.svg', dest: 'favicon-white.svg' },
  ];

  for (const favicon of favicons) {
    const faviconPath = join(projectRoot, 'public', favicon.src);
    try {
      await copyFile(faviconPath, join(outputDir, favicon.dest));
    } catch (error) {
      console.warn(`${favicon.src} not found. Skipping favicon copy.`, error);
    }
  }
}

function generateHtmlTemplate(diffData: StaticDiffData, jsFile: string, cssFile: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="./favicon.svg">
  <link rel="icon" href="./favicon.svg" media="(prefers-color-scheme: light)">
  <link rel="icon" href="./favicon-white.svg" media="(prefers-color-scheme: dark)">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>difit - ${diffData.targetCommitish} vs ${diffData.baseCommitish}</title>
  <link rel="stylesheet" href="./assets/${cssFile}">
</head>
<body>
  <div id="root" data-static-mode="true"></div>
  <script type="module" src="./assets/${jsFile}"></script>
</body>
</html>`;
}
