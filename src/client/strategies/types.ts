import { type DiffResponse, type DiffComment } from '../../types/diff';

export interface DiffSourceCapabilities {
  readonly canSyncComments: boolean;
  readonly canWatchFiles: boolean;
  readonly canStreamUpdates: boolean;
  readonly canFetchBlobs: boolean;
  readonly persistenceMode: 'server' | 'local' | 'none';
  readonly requiresAuth: boolean;
  readonly maxFileSize?: number;
}

export interface FetchOptions {
  ignoreWhitespace: boolean;
}

export interface DiffSourceStrategy {
  readonly name: string;
  readonly capabilities: DiffSourceCapabilities;

  // Core methods
  initialize?(): Promise<void>;
  fetchDiff(options: FetchOptions): Promise<DiffResponse>;

  // Optional methods based on capabilities
  fetchBlob?(path: string, ref: string): Promise<Blob>;
  syncComments?(comments: DiffComment[]): Promise<void>;
  watchFiles?(callback: () => void): () => void;
  establishConnection?(): () => void;
  dispose?(): void;
}
