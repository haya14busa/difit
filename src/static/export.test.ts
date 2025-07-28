import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dependencies
vi.mock('../server/git-diff.js');
vi.mock('fs/promises');
vi.mock('path');

describe('exportStaticSite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('static data generation', () => {
    it('should generate diff data for static export', async () => {
      const { exportStaticSite } = await import('./export.js');
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      await exportStaticSite(outputDir, options);

      // Should generate diff data
      const { GitDiffParser } = await import('../server/git-diff.js');
      const mockParser = vi.mocked(GitDiffParser).mock.instances[0];
      expect(mockParser?.parseDiff).toHaveBeenCalledWith('HEAD', 'HEAD^', true);
    });

    it('should generate both whitespace modes when ignoreWhitespace not specified', async () => {
      const { exportStaticSite } = await import('./export.js');
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      await exportStaticSite(outputDir, options);

      const { GitDiffParser } = await import('../server/git-diff.js');
      const mockParser = vi.mocked(GitDiffParser).mock.instances[0];

      // Should generate both modes
      expect(mockParser?.parseDiff).toHaveBeenCalledWith('HEAD', 'HEAD^', true);
      expect(mockParser?.parseDiff).toHaveBeenCalledWith('HEAD', 'HEAD^', false);
    });

    it('should handle special arguments like working and staged', async () => {
      const { exportStaticSite } = await import('./export.js');
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'working',
        baseCommitish: 'staged',
        mode: 'side-by-side' as const,
      };

      await exportStaticSite(outputDir, options);

      const { GitDiffParser } = await import('../server/git-diff.js');
      const mockParser = vi.mocked(GitDiffParser).mock.instances[0];
      expect(mockParser?.parseDiff).toHaveBeenCalledWith('working', 'staged', true);
    });

    it('should create output directory if it does not exist', async () => {
      const { exportStaticSite } = await import('./export.js');
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      await exportStaticSite(outputDir, options);

      const fs = await import('fs/promises');
      expect(fs.mkdir).toHaveBeenCalledWith(outputDir, { recursive: true });
    });

    it('should write diff data as JSON to output directory', async () => {
      const { exportStaticSite } = await import('./export.js');
      const outputDir = './test-output';
      const options = {
        targetCommitish: 'HEAD',
        baseCommitish: 'HEAD^',
        mode: 'side-by-side',
      };

      const mockDiffData = {
        files: [],
        stats: { additions: 0, deletions: 0, changes: 0 },
        commit: 'abc123',
        isEmpty: false,
      };

      const { GitDiffParser } = await import('../server/git-diff.js');
      const mockParser = {
        parseDiff: vi.fn().mockResolvedValue(mockDiffData),
      };
      vi.mocked(GitDiffParser).mockImplementation(() => mockParser);

      await exportStaticSite(outputDir, options);

      const fs = await import('fs/promises');
      const path = await import('path');

      expect(fs.writeFile).toHaveBeenCalledWith(
        path.join(outputDir, 'diff-data.json'),
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
