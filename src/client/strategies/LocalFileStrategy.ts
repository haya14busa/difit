import { type DiffResponse } from '../../types/diff';

import { type DiffSourceCapabilities, type DiffSourceStrategy, type FetchOptions } from './types';

interface StaticDiffData {
  ignoreWhitespace: DiffResponse;
  showWhitespace: DiffResponse;
  mode: string;
  baseCommitish: string;
  targetCommitish: string;
}

export class LocalFileStrategy implements DiffSourceStrategy {
  readonly name = 'local-file';
  readonly capabilities: DiffSourceCapabilities = {
    canSyncComments: false,
    canWatchFiles: false,
    canStreamUpdates: false,
    canFetchBlobs: true,
    requiresAuth: false,
  };

  private baseCommitish: string = 'unknown';

  async fetchDiff(options: FetchOptions): Promise<DiffResponse> {
    const response = await fetch('/diff-data.json');
    if (!response.ok) {
      throw new Error('Failed to fetch static diff data');
    }

    const staticData = (await response.json()) as StaticDiffData;

    // Store commitish for blob fetching
    this.baseCommitish = staticData.baseCommitish;

    const data = options.ignoreWhitespace ? staticData.ignoreWhitespace : staticData.showWhitespace;

    return {
      ...data,
      mode: staticData.mode,
      baseCommitish: staticData.baseCommitish,
      targetCommitish: staticData.targetCommitish,
    };
  }

  async fetchBlob(path: string, ref: string): Promise<Blob> {
    // Extract filename and extension
    const baseName =
      path
        .split('/')
        .pop()
        ?.replace(/\.[^.]+$/, '') || '';
    const ext = path.split('.').pop() || '';

    // Determine version based on ref
    const version = ref === this.baseCommitish ? 'old' : 'new';

    const response = await fetch(`./images/${baseName}_${version}.${ext}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch blob: ${path}`);
    }

    return response.blob();
  }
}
