import { type DiffResponse, type DiffFile, type DiffChunk, type DiffLine } from '../../types/diff';
import {
  type GitHubPullRequest,
  type GitHubPullRequestFile,
  type GitHubPrUrlParams,
} from '../../types/github';

import { type DiffSourceCapabilities, type DiffSourceStrategy, type FetchOptions } from './types';

export class GitHubPrStrategy implements DiffSourceStrategy {
  readonly name = 'github-pr';
  readonly capabilities: DiffSourceCapabilities = {
    canSyncComments: false,
    canWatchFiles: false,
    canStreamUpdates: false,
    canFetchBlobs: true,
    requiresAuth: false, // Will be true when we add OAuth
    maxFileSize: 1000000, // GitHub API has file size limits
  };

  private prData: GitHubPullRequest | null = null;
  private urlParams: GitHubPrUrlParams | null = null;

  constructor() {
    // Parse URL to get owner, repo, and PR number
    const urlMatch = window.location.pathname.match(/^\/([^/]+)\/([^/]+)\/pull\/(\d+)/);
    if (urlMatch) {
      this.urlParams = {
        owner: urlMatch[1] || '',
        repo: urlMatch[2] || '',
        prNumber: parseInt(urlMatch[3] || '0', 10),
      };
    }
  }

  async initialize(): Promise<void> {
    if (!this.urlParams) {
      throw new Error('Invalid GitHub PR URL format');
    }
    // Initialization complete
    await Promise.resolve();
  }

  async fetchDiff(options: FetchOptions): Promise<DiffResponse> {
    if (!this.urlParams) {
      throw new Error('GitHub PR URL parameters not available');
    }

    const { owner, repo, prNumber } = this.urlParams;

    try {
      // Fetch PR data
      const prResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      if (!prResponse.ok) {
        throw new Error(`Failed to fetch PR data: ${prResponse.statusText}`);
      }

      this.prData = (await prResponse.json()) as GitHubPullRequest;

      // Fetch PR files
      const filesResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/files`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );

      if (!filesResponse.ok) {
        throw new Error(`Failed to fetch PR files: ${filesResponse.statusText}`);
      }

      const files = (await filesResponse.json()) as GitHubPullRequestFile[];

      // Convert GitHub files to DiffFile format
      const diffFiles: DiffFile[] = files.map((file) =>
        this.convertGitHubFileToDiffFile(file, options)
      );

      return {
        files: diffFiles,
        commit: `${this.prData.base.sha.slice(0, 7)}...${this.prData.head.sha.slice(0, 7)}`,
        baseCommitish: this.prData.base.sha,
        targetCommitish: this.prData.head.sha,
        isEmpty: diffFiles.length === 0,
        mode: 'side-by-side',
        clearComments: false,
      };
    } catch (error) {
      console.error('Failed to fetch GitHub PR diff:', error);
      throw error;
    }
  }

  private convertGitHubFileToDiffFile(
    file: GitHubPullRequestFile,
    _options: FetchOptions
  ): DiffFile {
    // Map GitHub status to our status
    let status: DiffFile['status'] = 'modified';
    if (file.status === 'added') status = 'added';
    else if (file.status === 'removed') status = 'deleted';
    else if (file.status === 'renamed') status = 'renamed';

    // Parse the patch to get chunks
    let chunks: DiffChunk[] = [];
    if (file.patch) {
      // Parse the patch manually to extract chunks
      chunks = this.parsePatchToChunks(file.patch);
    }

    return {
      path: file.filename,
      oldPath: file.previous_filename || file.filename,
      chunks,
      additions: file.additions,
      deletions: file.deletions,
      status,
    };
  }

  private parsePatchToChunks(patch: string): DiffChunk[] {
    const chunks: DiffChunk[] = [];
    const lines = patch.split('\n');
    let currentChunk: DiffChunk | null = null;
    let oldLineNum = 0;
    let newLineNum = 0;

    for (const line of lines) {
      if (line.startsWith('@@')) {
        if (currentChunk) {
          chunks.push(currentChunk);
        }

        const match = line.match(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(.*)/);
        if (match) {
          const oldStart = parseInt(match[1] || '0', 10);
          const oldLines = parseInt(match[2] ?? '1', 10);
          const newStart = parseInt(match[3] || '0', 10);
          const newLines = parseInt(match[4] ?? '1', 10);

          oldLineNum = oldStart;
          newLineNum = newStart;

          currentChunk = {
            header: line,
            oldStart,
            oldLines,
            newStart,
            newLines,
            lines: [],
          };
        }
      } else if (
        currentChunk &&
        (line.startsWith('+') || line.startsWith('-') || line.startsWith(' '))
      ) {
        const type: DiffLine['type'] =
          line.startsWith('+') ? 'add'
          : line.startsWith('-') ? 'delete'
          : 'normal';

        const diffLine: DiffLine = {
          type,
          content: line.slice(1),
          oldLineNumber: type !== 'add' ? oldLineNum : undefined,
          newLineNumber: type !== 'delete' ? newLineNum : undefined,
        };

        currentChunk.lines.push(diffLine);

        if (type !== 'add') oldLineNum++;
        if (type !== 'delete') newLineNum++;
      }
    }

    if (currentChunk) {
      chunks.push(currentChunk);
    }

    return chunks;
  }

  async fetchBlob(path: string, ref: string): Promise<Blob> {
    if (!this.urlParams || !this.prData) {
      throw new Error('GitHub PR data not available');
    }

    const { owner, repo } = this.urlParams;

    // Use the raw content URL
    const response = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${path}`,
      {
        headers: {
          Accept: 'application/octet-stream',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch blob: ${path}`);
    }

    return response.blob();
  }
}
