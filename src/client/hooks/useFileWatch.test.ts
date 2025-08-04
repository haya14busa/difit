import { act, renderHook, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { DiffResponse } from '../../types/diff';
import { DiffMode } from '../../types/watch.js';
import type { DiffSourceStrategy, DiffSourceCapabilities, FetchOptions } from '../strategies/types';

import { useFileWatch } from './useFileWatch.js';

// Mock console methods
vi.spyOn(console, 'log').mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

// Create a mock strategy
class MockStrategy implements DiffSourceStrategy {
  name = 'mock';
  capabilities: DiffSourceCapabilities = {
    canSyncComments: false,
    canWatchFiles: true,
    canStreamUpdates: false,
    canFetchBlobs: false,
    requiresAuth: false,
  };

  watchFilesCallback: (() => void) | null = null;
  watchFilesMock = vi.fn((callback: () => void) => {
    this.watchFilesCallback = callback;
    return () => {
      this.watchFilesCallback = null;
    };
  });

  watchFiles = this.watchFilesMock;

  async fetchDiff(_options: FetchOptions): Promise<DiffResponse> {
    // Return a mock diff response
    return {
      files: [],
      commit: 'mock-commit',
      isEmpty: false,
      mode: 'side-by-side',
      baseCommitish: 'base',
      targetCommitish: 'target',
    };
  }

  triggerFileChange() {
    if (this.watchFilesCallback) {
      this.watchFilesCallback();
    }
  }
}

describe('useFileWatch', () => {
  let mockStrategy: MockStrategy;

  beforeEach(() => {
    vi.clearAllMocks();
    mockStrategy = new MockStrategy();
  });

  describe('initial state', () => {
    it('should initialize with default state', () => {
      const { result } = renderHook(() => useFileWatch());

      expect(result.current.shouldReload).toBe(false);
      expect(result.current.isConnected).toBe(false);
      expect(result.current.error).toBe(null);
      expect(result.current.watchState).toEqual({
        isWatchEnabled: false,
        diffMode: DiffMode.DEFAULT,
        shouldReload: false,
        isReloading: false,
        lastChangeTime: null,
        lastChangeType: null,
        connectionStatus: 'disconnected',
      });
    });
  });

  describe('with strategy', () => {
    it('should setup file watching when strategy supports it', async () => {
      const { result } = renderHook(() => useFileWatch(undefined, mockStrategy));

      await waitFor(() => {
        expect(mockStrategy.watchFilesMock).toHaveBeenCalledWith(expect.any(Function));
      });

      expect(result.current.watchState.isWatchEnabled).toBe(true);
      expect(result.current.watchState.connectionStatus).toBe('connected');
    });

    it('should handle file change events', async () => {
      const { result } = renderHook(() => useFileWatch(undefined, mockStrategy));

      await waitFor(() => {
        expect(mockStrategy.watchFilesMock).toHaveBeenCalled();
      });

      act(() => {
        mockStrategy.triggerFileChange();
      });

      await waitFor(() => {
        expect(result.current.shouldReload).toBe(true);
        expect(result.current.watchState.shouldReload).toBe(true);
        expect(result.current.watchState.lastChangeType).toBe('file');
        expect(result.current.watchState.lastChangeTime).toBeInstanceOf(Date);
      });
    });

    it('should not setup watching when strategy does not support it', () => {
      const noWatchStrategy: DiffSourceStrategy = {
        name: 'no-watch',
        capabilities: {
          canSyncComments: false,
          canWatchFiles: false,
          canStreamUpdates: false,
          canFetchBlobs: false,
          requiresAuth: false,
        },
        async fetchDiff(_options: FetchOptions): Promise<DiffResponse> {
          return {
            files: [],
            commit: 'mock-commit',
            isEmpty: false,
            mode: 'side-by-side',
            baseCommitish: 'base',
            targetCommitish: 'target',
          };
        },
      };

      const { result } = renderHook(() => useFileWatch(undefined, noWatchStrategy));

      expect(result.current.watchState.isWatchEnabled).toBe(false);
      expect(result.current.watchState.connectionStatus).toBe('disconnected');
    });
  });

  describe('reload functionality', () => {
    it('should call onReload callback when reload is triggered', async () => {
      const onReloadMock = vi.fn().mockResolvedValue(undefined);
      const { result } = renderHook(() => useFileWatch(onReloadMock, mockStrategy));

      // Trigger a file change to enable reload
      act(() => {
        mockStrategy.triggerFileChange();
      });

      await waitFor(() => {
        expect(result.current.shouldReload).toBe(true);
      });

      // Trigger reload
      await act(async () => {
        await result.current.reload();
      });

      expect(onReloadMock).toHaveBeenCalled();
      expect(result.current.shouldReload).toBe(false);
      expect(result.current.watchState.shouldReload).toBe(false);
      expect(result.current.watchState.isReloading).toBe(false);
    });

    it('should handle reload errors', async () => {
      const onReloadMock = vi.fn().mockRejectedValue(new Error('Reload failed'));
      const { result } = renderHook(() => useFileWatch(onReloadMock, mockStrategy));

      // Trigger a file change to enable reload
      act(() => {
        mockStrategy.triggerFileChange();
      });

      await waitFor(() => {
        expect(result.current.shouldReload).toBe(true);
      });

      // Trigger reload
      await act(async () => {
        await result.current.reload();
      });

      expect(onReloadMock).toHaveBeenCalled();
      expect(result.current.error).toBe('Failed to reload diff data');
      expect(result.current.watchState.isReloading).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalledWith('Reload failed:', expect.any(Error));
    });

    it('should not reload if already reloading', async () => {
      let resolveReload: (() => void) | null = null;
      const onReloadMock = vi.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveReload = resolve;
          })
      );
      const { result } = renderHook(() => useFileWatch(onReloadMock, mockStrategy));

      // Trigger a file change to enable reload
      act(() => {
        mockStrategy.triggerFileChange();
      });

      await waitFor(() => {
        expect(result.current.shouldReload).toBe(true);
      });

      // Start first reload without awaiting
      act(() => {
        void result.current.reload();
      });

      // Try second reload while first is in progress
      act(() => {
        void result.current.reload();
      });

      // Only one call should be made
      expect(onReloadMock).toHaveBeenCalledTimes(1);

      // Complete the first reload
      act(() => {
        resolveReload?.();
      });

      await waitFor(() => {
        expect(result.current.watchState.isReloading).toBe(false);
      });
    });
  });

  describe('cleanup', () => {
    it('should cleanup on unmount', async () => {
      const cleanupMock = vi.fn();
      mockStrategy.watchFilesMock.mockReturnValue(cleanupMock);

      const { unmount } = renderHook(() => useFileWatch(undefined, mockStrategy));

      await waitFor(() => {
        expect(mockStrategy.watchFilesMock).toHaveBeenCalled();
      });

      unmount();

      expect(cleanupMock).toHaveBeenCalled();
    });

    it('should cleanup when strategy changes', async () => {
      const cleanupMock = vi.fn();
      mockStrategy.watchFilesMock.mockReturnValue(cleanupMock);

      const { rerender } = renderHook(({ strategy }) => useFileWatch(undefined, strategy), {
        initialProps: { strategy: mockStrategy as DiffSourceStrategy | null },
      });

      await waitFor(() => {
        expect(mockStrategy.watchFilesMock).toHaveBeenCalled();
      });

      // Change to a different strategy
      const newStrategy = new MockStrategy();
      rerender({ strategy: newStrategy as DiffSourceStrategy | null });

      expect(cleanupMock).toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('should handle connection errors', () => {
      const errorStrategy = new MockStrategy();
      errorStrategy.watchFiles = vi.fn(() => {
        throw new Error('Connection failed');
      });

      const { result } = renderHook(() => useFileWatch(undefined, errorStrategy));

      expect(result.current.error).toBe('Failed to setup file watch');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to setup file watch:',
        expect.any(Error)
      );
    });
  });
});
