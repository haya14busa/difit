import { join } from 'path';

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Create mock functions
const mockParseDiff = vi.fn();
const mockParseStdinDiff = vi.fn();

// Mock modules before imports
vi.mock('../shared/git-parser.js', () => ({
  GitDiffParser: vi.fn(() => ({
    parseDiff: mockParseDiff,
    parseStdinDiff: mockParseStdinDiff,
  })),
}));

vi.mock('fs/promises');

// Mock html-generator
vi.mock('./html-generator.js', () => ({
  generateStaticHtml: vi.fn(),
}));

describe('exportStaticSite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    mockParseDiff.mockClear();
    mockParseStdinDiff.mockClear();
  });

  describe('static data generation', () => {
    it('should generate diff data for static export', async () => {
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      const mockDiffData = {
        files: [],
        commit: 'abc123',
        isEmpty: false,
      };
      mockParseDiff.mockResolvedValue(mockDiffData);

      // Import dynamically to ensure mocks are set up
      const { exportStaticSite } = await import('./export.js');
      const { GitDiffParser } = await import('../shared/git-parser.js');

      await exportStaticSite(outputDir, options);

      // Should create parser instance
      expect(GitDiffParser).toHaveBeenCalled();

      // Should generate diff data with ignoreWhitespace=true
      expect(mockParseDiff).toHaveBeenCalledWith('HEAD', 'HEAD^', true);
    });

    it('should generate both whitespace modes when ignoreWhitespace not specified', async () => {
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      const mockDiffData = {
        files: [],
        commit: 'abc123',
        isEmpty: false,
      };
      mockParseDiff.mockResolvedValue(mockDiffData);

      const { exportStaticSite } = await import('./export.js');

      await exportStaticSite(outputDir, options);

      // Should generate both modes
      expect(mockParseDiff).toHaveBeenCalledWith('HEAD', 'HEAD^', true);
      expect(mockParseDiff).toHaveBeenCalledWith('HEAD', 'HEAD^', false);
      expect(mockParseDiff).toHaveBeenCalledTimes(2);
    });

    it('should handle special arguments like working and staged', async () => {
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'working',
        baseCommitish: 'staged',
        mode: 'side-by-side',
      };

      const mockDiffData = {
        files: [],
        commit: 'Working Directory',
        isEmpty: false,
      };
      mockParseDiff.mockResolvedValue(mockDiffData);

      const { exportStaticSite } = await import('./export.js');

      await exportStaticSite(outputDir, options);

      expect(mockParseDiff).toHaveBeenCalledWith('working', 'staged', true);
      expect(mockParseDiff).toHaveBeenCalledWith('working', 'staged', false);
    });

    it('should create output directory if it does not exist', async () => {
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      const mockDiffData = {
        files: [],
        commit: 'abc123',
        isEmpty: false,
      };
      mockParseDiff.mockResolvedValue(mockDiffData);

      const fs = await import('fs/promises');
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const { exportStaticSite } = await import('./export.js');

      await exportStaticSite(outputDir, options);

      expect(fs.mkdir).toHaveBeenCalledWith(outputDir, { recursive: true });
    });

    it('should write diff data as JSON to output directory', async () => {
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      const mockDiffData = {
        files: [],
        commit: 'abc123',
        isEmpty: false,
      };

      mockParseDiff.mockResolvedValue(mockDiffData);

      const fs = await import('fs/promises');
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const { exportStaticSite } = await import('./export.js');

      await exportStaticSite(outputDir, options);

      expect(fs.writeFile).toHaveBeenCalledWith(
        join(outputDir, 'diff-data.json'),
        JSON.stringify({
          ignoreWhitespace: mockDiffData,
          showWhitespace: mockDiffData,
          mode: 'side-by-side',
          baseCommitish: 'HEAD^',
          targetCommitish: 'HEAD',
        }),
        'utf-8'
      );
    });
  });

  describe('exportStaticSiteFromStdin', () => {
    it('should export static site from stdin diff', async () => {
      const diffContent = `diff --git a/test.js b/test.js
index 1234567..abcdefg 100644
--- a/test.js
+++ b/test.js
@@ -1,3 +1,3 @@
 function hello() {
-  console.log('hello');
+  console.log('hello world');
 }`;

      const mockStdinDiffData = {
        commit: 'stdin diff',
        files: [
          {
            path: 'test.js',
            additions: 1,
            deletions: 1,
            chunks: [],
          },
        ],
        isEmpty: false,
      };

      mockParseStdinDiff.mockReturnValue(mockStdinDiffData);

      const fs = await import('fs/promises');
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const { exportStaticSiteFromStdin } = await import('./export.js');
      await exportStaticSiteFromStdin('./test-output', {
        diffContent,
        mode: 'inline',
      });

      // Check JSON file was written with correct data
      expect(fs.writeFile).toHaveBeenCalledWith(
        join('./test-output', 'diff-data.json'),
        JSON.stringify({
          ignoreWhitespace: mockStdinDiffData,
          showWhitespace: mockStdinDiffData,
          mode: 'inline',
          baseCommitish: 'stdin',
          targetCommitish: 'stdin',
        }),
        'utf-8'
      );

      // Check parseStdinDiff was called with correct content
      expect(mockParseStdinDiff).toHaveBeenCalledWith(diffContent);
    });

    it('should handle stdin diff with image files', async () => {
      const diffContent = `diff --git a/image.png b/image.png
index 1234567..abcdefg 100644
Binary files a/image.png and b/image.png differ`;

      const mockStdinDiffData = {
        commit: 'stdin diff',
        files: [
          {
            path: 'image.png',
            additions: 0,
            deletions: 0,
            chunks: [],
          },
        ],
        isEmpty: false,
      };

      mockParseStdinDiff.mockReturnValue(mockStdinDiffData);

      const fs = await import('fs/promises');
      vi.mocked(fs.mkdir).mockResolvedValue(undefined);
      vi.mocked(fs.writeFile).mockResolvedValue(undefined);

      const { exportStaticSiteFromStdin } = await import('./export.js');
      await exportStaticSiteFromStdin('./test-output', {
        diffContent,
        mode: 'side-by-side',
      });

      // Verify that the static data was written correctly
      expect(fs.writeFile).toHaveBeenCalledWith(
        join('./test-output', 'diff-data.json'),
        JSON.stringify({
          ignoreWhitespace: mockStdinDiffData,
          showWhitespace: mockStdinDiffData,
          mode: 'side-by-side',
          baseCommitish: 'stdin',
          targetCommitish: 'stdin',
        }),
        'utf-8'
      );
    });
  });
});
