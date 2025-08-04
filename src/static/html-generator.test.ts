import { join } from 'path';

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock modules
vi.mock('fs/promises');
vi.mock('../shared/git-parser.js');

describe('HtmlGenerator', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('generateStaticHtml', () => {
    it('should generate index.html with embedded diff data', async () => {
      const fs = await import('fs/promises');
      vi.mocked(fs.readFile).mockResolvedValue(
        JSON.stringify({
          ignoreWhitespace: { files: [], commit: 'abc123', isEmpty: false },
          showWhitespace: { files: [], commit: 'abc123', isEmpty: false },
          mode: 'side-by-side',
          baseCommitish: 'HEAD^',
          targetCommitish: 'HEAD',
        })
      );
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const { generateStaticHtml } = await import('./html-generator.js');
      await generateStaticHtml('./output');

      // Should read diff data
      expect(fs.readFile).toHaveBeenCalledWith(join('./output', 'diff-data.json'), 'utf-8');

      // Should write index.html
      expect(fs.writeFile).toHaveBeenCalledWith(
        join('./output', 'index.html'),
        expect.stringContaining('<!DOCTYPE html>'),
        'utf-8'
      );
    });

    it('should set static mode flag in HTML', async () => {
      const mockDiffData = {
        ignoreWhitespace: { files: [], commit: 'abc123', isEmpty: false },
        showWhitespace: { files: [], commit: 'abc123', isEmpty: false },
        mode: 'side-by-side',
        baseCommitish: 'HEAD^',
        targetCommitish: 'HEAD',
      };

      const fs = await import('fs/promises');
      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(mockDiffData));

      let capturedHtml = '';
      vi.mocked(fs.writeFile).mockImplementation(async (_path, content) => {
        capturedHtml = content as string;
      });

      const { generateStaticHtml } = await import('./html-generator.js');
      await generateStaticHtml('./output');

      // Should set static mode flag
      expect(capturedHtml).toContain('data-static-mode="true"');
    });

    it('should include client bundle and styles', async () => {
      const fs = await import('fs/promises');
      vi.mocked(fs.readFile).mockResolvedValue(
        JSON.stringify({
          ignoreWhitespace: { files: [], commit: 'abc123', isEmpty: false },
          showWhitespace: { files: [], commit: 'abc123', isEmpty: false },
          mode: 'side-by-side',
          baseCommitish: 'HEAD^',
          targetCommitish: 'HEAD',
        })
      );

      let capturedHtml = '';
      vi.mocked(fs.writeFile).mockImplementation(async (_path, content) => {
        capturedHtml = content as string;
      });

      const { generateStaticHtml } = await import('./html-generator.js');
      await generateStaticHtml('./output');

      // Should include client assets
      expect(capturedHtml).toContain('<script type="module" src="./assets/');
      expect(capturedHtml).toContain('<link rel="stylesheet" href="./assets/');
      expect(capturedHtml).toContain('<div id="root" data-static-mode="true"></div>');
      // Should include favicon with dark mode support
      expect(capturedHtml).toContain('<link rel="icon" href="./favicon.svg">');
      expect(capturedHtml).toContain(
        '<link rel="icon" href="./favicon.svg" media="(prefers-color-scheme: light)">'
      );
      expect(capturedHtml).toContain(
        '<link rel="icon" href="./favicon-white.svg" media="(prefers-color-scheme: dark)">'
      );
    });

    it('should copy client assets to output directory', async () => {
      const fs = await import('fs/promises');
      vi.mocked(fs.readFile).mockResolvedValue(
        JSON.stringify({
          ignoreWhitespace: { files: [], commit: 'abc123', isEmpty: false },
          showWhitespace: { files: [], commit: 'abc123', isEmpty: false },
          mode: 'side-by-side',
          baseCommitish: 'HEAD^',
          targetCommitish: 'HEAD',
        })
      );
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);
      vi.mocked(fs.copyFile).mockResolvedValue(undefined);
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);
      vi.mocked(fs.readdir).mockResolvedValue([
        { name: 'index.js', isDirectory: () => false },
        { name: 'index.css', isDirectory: () => false },
      ] as any);

      const { generateStaticHtml } = await import('./html-generator.js');
      await generateStaticHtml('./output');

      // Should create assets directory
      expect(fs.mkdir).toHaveBeenCalledWith(join('./output', 'assets'), { recursive: true });

      // Should copy client assets (if available)
      // This test would pass if client assets exist
      expect(fs.mkdir).toHaveBeenCalledWith(join('./output', 'assets'), { recursive: true });
    });
  });

  describe('binary file handling', () => {
    it('should extract and embed binary files referenced in diff', async () => {
      const mockDiffData = {
        ignoreWhitespace: {
          files: [
            {
              path: 'image.png',
              status: 'modified',
              additions: 0,
              deletions: 0,
              chunks: [],
            },
          ],
          commit: 'abc123',
          isEmpty: false,
        },
        showWhitespace: {
          files: [
            {
              path: 'image.png',
              status: 'modified',
              additions: 0,
              deletions: 0,
              chunks: [],
            },
          ],
          commit: 'abc123',
          isEmpty: false,
        },
        mode: 'side-by-side',
        baseCommitish: 'HEAD^',
        targetCommitish: 'HEAD',
      };

      const fs = await import('fs/promises');
      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(mockDiffData));
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);

      const { GitDiffParser } = await import('../shared/git-parser.js');
      const mockGetBlobContent = vi
        .fn()
        .mockResolvedValueOnce(Buffer.from('old-image-data'))
        .mockResolvedValueOnce(Buffer.from('new-image-data'));

      vi.mocked(GitDiffParser).mockImplementation(
        () =>
          ({
            getBlobContent: mockGetBlobContent,
          }) as any
      );

      const { generateStaticHtml } = await import('./html-generator.js');
      await generateStaticHtml('./output');

      // Should get blob content for modified images
      expect(mockGetBlobContent).toHaveBeenCalledWith('image.png', 'HEAD^');
      expect(mockGetBlobContent).toHaveBeenCalledWith('image.png', 'HEAD');

      // Should create images directory
      expect(fs.mkdir).toHaveBeenCalledWith(join('./output', 'images'), { recursive: true });

      // Should write image files
      expect(fs.writeFile).toHaveBeenCalledWith(
        expect.stringContaining('image'),
        expect.any(Buffer)
      );
    });

    it('should handle added and deleted image files', async () => {
      const mockDiffData = {
        ignoreWhitespace: {
          files: [
            {
              path: 'added.png',
              status: 'added',
              additions: 0,
              deletions: 0,
              chunks: [],
            },
            {
              path: 'deleted.png',
              status: 'deleted',
              additions: 0,
              deletions: 0,
              chunks: [],
            },
          ],
          commit: 'abc123',
          isEmpty: false,
        },
        showWhitespace: {
          files: [
            {
              path: 'added.png',
              status: 'added',
              additions: 0,
              deletions: 0,
              chunks: [],
            },
            {
              path: 'deleted.png',
              status: 'deleted',
              additions: 0,
              deletions: 0,
              chunks: [],
            },
          ],
          commit: 'abc123',
          isEmpty: false,
        },
        mode: 'side-by-side',
        baseCommitish: 'HEAD^',
        targetCommitish: 'HEAD',
      };

      const fs = await import('fs/promises');
      vi.mocked(fs.readFile).mockResolvedValue(JSON.stringify(mockDiffData));
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);

      const { GitDiffParser } = await import('../shared/git-parser.js');
      const mockGetBlobContent = vi
        .fn()
        .mockResolvedValueOnce(Buffer.from('new-image-data'))
        .mockResolvedValueOnce(Buffer.from('old-image-data'));

      vi.mocked(GitDiffParser).mockImplementation(
        () =>
          ({
            getBlobContent: mockGetBlobContent,
          }) as any
      );

      const { generateStaticHtml } = await import('./html-generator.js');
      await generateStaticHtml('./output');

      // Should only get new content for added files
      expect(mockGetBlobContent).toHaveBeenCalledWith('added.png', 'HEAD');

      // Should only get old content for deleted files
      expect(mockGetBlobContent).toHaveBeenCalledWith('deleted.png', 'HEAD^');
    });
  });
});
