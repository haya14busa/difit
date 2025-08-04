import { type DiffResponse, type DiffComment } from '../../types/diff';

import { type DiffSourceCapabilities, type DiffSourceStrategy, type FetchOptions } from './types';

export class ServerApiStrategy implements DiffSourceStrategy {
  readonly name = 'server-api';
  readonly capabilities: DiffSourceCapabilities = {
    canSyncComments: true,
    canWatchFiles: true,
    canStreamUpdates: true,
    canFetchBlobs: true,
    requiresAuth: false,
  };

  private eventSource: EventSource | null = null;
  private heartbeatSource: EventSource | null = null;

  async fetchDiff(options: FetchOptions): Promise<DiffResponse> {
    const response = await fetch(`/api/diff?ignoreWhitespace=${options.ignoreWhitespace}`);
    if (!response.ok) {
      throw new Error('Failed to fetch diff data');
    }
    return response.json() as Promise<DiffResponse>;
  }

  async fetchBlob(path: string, ref: string): Promise<Blob> {
    const response = await fetch(
      `/api/blob/${encodeURIComponent(path)}?ref=${encodeURIComponent(ref)}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch blob: ${path}`);
    }
    return response.blob();
  }

  async syncComments(comments: DiffComment[]): Promise<void> {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comments }),
    });

    if (!response.ok) {
      throw new Error('Failed to sync comments');
    }
  }

  watchFiles(callback: () => void): () => void {
    this.eventSource = new EventSource('/api/watch');

    this.eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data as string) as { type: string };
      if (data.type === 'change') {
        callback();
      }
    };

    this.eventSource.onerror = () => {
      console.error('File watch connection error');
    };

    return () => {
      this.eventSource?.close();
      this.eventSource = null;
    };
  }

  establishConnection(): () => void {
    this.heartbeatSource = new EventSource('/api/heartbeat');

    this.heartbeatSource.onopen = () => {
      console.log('Connected to server heartbeat');
    };

    this.heartbeatSource.onerror = () => {
      console.log('Server connection lost');
      this.heartbeatSource?.close();
      this.heartbeatSource = null;
    };

    return () => {
      this.heartbeatSource?.close();
      this.heartbeatSource = null;
    };
  }

  dispose(): void {
    this.eventSource?.close();
    this.heartbeatSource?.close();
    this.eventSource = null;
    this.heartbeatSource = null;
  }
}
