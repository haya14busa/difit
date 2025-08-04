#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

console.log('Building GitHub PR SPA...\n');

// Build the client
console.log('Building client assets...');
execSync('npm run build', { stdio: 'inherit', cwd: projectRoot });

// Create GitHub SPA dist directory
const githubDistDir = path.join(projectRoot, 'dist-github-spa');
if (!fs.existsSync(githubDistDir)) {
  fs.mkdirSync(githubDistDir, { recursive: true });
}

// Copy client build files
console.log('\nCopying build files...');
const clientDistDir = path.join(projectRoot, 'dist', 'client');
copyDirectory(clientDistDir, githubDistDir);

// Create a custom index.html with proper base href for SPA routing
const indexPath = path.join(githubDistDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// Add a <base> tag if not present
if (!indexContent.includes('<base')) {
  indexContent = indexContent.replace('<head>', '<head>\n    <base href="/">');
}

// Add GitHub SPA mode marker
indexContent = indexContent.replace('<div id="root">', '<div id="root" data-github-spa="true">');

fs.writeFileSync(indexPath, indexContent);

// Create a 404.html that redirects to index.html for GitHub Pages
const notFoundContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      // Preserve the path and redirect to index.html
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body>
    Redirecting...
  </body>
</html>`;

fs.writeFileSync(path.join(githubDistDir, '404.html'), notFoundContent);

// Add a script to handle the redirect in index.html
indexContent = indexContent.replace(
  '</body>',
  `<script>
    // Handle redirect from 404.html
    (function() {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
  </body>`
);

fs.writeFileSync(indexPath, indexContent);

console.log(`\n✅ GitHub PR SPA built successfully!`);
console.log(`📁 Output directory: ${githubDistDir}`);
console.log(`\nTo deploy to GitHub Pages or any static hosting:`);
console.log(`1. Upload the contents of ${githubDistDir}`);
console.log(`2. Configure the server to serve index.html for all routes`);
console.log(`3. Access PRs at: https://<host>/<owner>/<repo>/pull/<pr-number>\n`);

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
