import { useCallback, useEffect, useRef, useState } from 'react';

import { DiffMode, type ClientWatchState } from '../../types/watch.js';
import type { DiffSourceStrategy } from '../strategies/types';

interface FileWatchHook {
  shouldReload: boolean;
  isConnected: boolean;
  error: string | null;
  reload: () => void;
  watchState: ClientWatchState;
}

export function useFileWatch(
  onReload?: () => Promise<void>,
  strategy?: DiffSourceStrategy | null
): FileWatchHook {
  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const [watchState, setWatchState] = useState<ClientWatchState>({
    isWatchEnabled: false,
    diffMode: DiffMode.DEFAULT,
    shouldReload: false,
    isReloading: false,
    lastChangeTime: null,
    lastChangeType: null,
    connectionStatus: 'disconnected',
  });

  const [error, setError] = useState<string | null>(null);

  const connectToWatch = useCallback(() => {
    // Check if strategy supports file watching
    if (!strategy?.capabilities.canWatchFiles || !strategy.watchFiles) {
      setWatchState((prev) => ({
        ...prev,
        isWatchEnabled: false,
        connectionStatus: 'disconnected',
      }));
      return;
    }

    try {
      // Use strategy's watchFiles method
      const cleanup = strategy.watchFiles(() => {
        console.log('File changes detected, showing reload button');
        setWatchState((prev) => ({
          ...prev,
          shouldReload: true,
          lastChangeTime: new Date(),
          lastChangeType: 'file',
        }));
      });

      cleanupRef.current = cleanup;
      setError(null);

      // Set connected state immediately after successful setup
      setWatchState((prev) => ({
        ...prev,
        isWatchEnabled: true,
        connectionStatus: 'connected',
      }));
    } catch (connectionError) {
      console.error('Failed to setup file watch:', connectionError);
      setError('Failed to setup file watch');
    }
  }, [strategy]);

  const handleReload = useCallback(async () => {
    if (watchState.isReloading) {
      return; // Already reloading
    }

    setWatchState((prev) => ({
      ...prev,
      isReloading: true,
    }));

    try {
      if (onReload) {
        await onReload();
      }

      // Reset reload state after successful reload
      setWatchState((prev) => ({
        ...prev,
        shouldReload: false,
        isReloading: false,
        lastChangeTime: null,
        lastChangeType: null,
      }));
    } catch (reloadError) {
      console.error('Reload failed:', reloadError);
      setError('Failed to reload diff data');

      setWatchState((prev) => ({
        ...prev,
        isReloading: false,
      }));
    }
  }, [onReload, watchState.isReloading]);

  const cleanup = () => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  };

  // Initialize connection when strategy changes
  useEffect(() => {
    connectToWatch();

    return cleanup;
  }, [connectToWatch]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, []);

  return {
    shouldReload: watchState.shouldReload,
    isConnected: watchState.connectionStatus === 'connected',
    error,
    reload: handleReload,
    watchState,
  };
}
