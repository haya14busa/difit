import { join } from 'path';

import { describe, it, expect, vi, beforeEach } from 'vitest';

// Create mock functions
const mockParseDiff = vi.fn();

// Mock modules before imports
vi.mock('../shared/git-parser.js', () => ({
  GitDiffParser: vi.fn(() => ({
    parseDiff: mockParseDiff,
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
});
