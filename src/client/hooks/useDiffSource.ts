import { useState, useEffect, useRef, useCallback } from 'react';

import { type DiffResponse, type DiffComment } from '../../types/diff';
import { DiffSourceFactory, type DiffSourceType } from '../strategies/factory';
import { type DiffSourceStrategy } from '../strategies/types';

interface UseDiffSourceOptions {
  autoDetect?: boolean;
  type?: DiffSourceType;
  ignoreWhitespace?: boolean;
  onCommentsSync?: (comments: DiffComment[]) => void;
}

interface UseDiffSourceResult {
  diffData: DiffResponse | null;
  loading: boolean;
  error: string | null;
  strategy: DiffSourceStrategy | null;
  refetch: () => Promise<void>;
  syncComments: (comments: DiffComment[]) => Promise<void>;
  canSyncComments: boolean;
  canWatchFiles: boolean;
  canFetchBlobs: boolean;
}

export function useDiffSource(options: UseDiffSourceOptions = {}): UseDiffSourceResult {
  const { autoDetect = true, type, ignoreWhitespace = true, onCommentsSync } = options;

  const [diffData, setDiffData] = useState<DiffResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [strategy, setStrategy] = useState<DiffSourceStrategy | null>(null);

  const strategyRef = useRef<DiffSourceStrategy | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  // Initialize strategy
  useEffect(() => {
    const sourceType = type || (autoDetect ? DiffSourceFactory.detectType() : 'server');

    try {
      const newStrategy = DiffSourceFactory.create(sourceType);
      strategyRef.current = newStrategy;
      setStrategy(newStrategy);

      // Initialize strategy if needed
      if (newStrategy.initialize) {
        newStrategy.initialize().catch((err) => {
          console.error('Failed to initialize strategy:', err);
          setError(err instanceof Error ? err.message : 'Failed to initialize');
        });
      }

      // Establish connection if supported
      if (newStrategy.establishConnection) {
        const cleanup = newStrategy.establishConnection();
        cleanupRef.current = cleanup;
      }
    } catch (err) {
      console.error('Failed to create strategy:', err);
      setError(err instanceof Error ? err.message : 'Failed to create strategy');
      setLoading(false);
    }

    return () => {
      cleanupRef.current?.();
      strategyRef.current?.dispose?.();
      cleanupRef.current = null;
      strategyRef.current = null;
    };
  }, [type, autoDetect]);

  // Fetch diff data
  const fetchDiff = useCallback(async () => {
    if (!strategyRef.current) return;

    setLoading(true);
    setError(null);

    try {
      const data = await strategyRef.current.fetchDiff({ ignoreWhitespace });
      setDiffData(data);
    } catch (err) {
      console.error('Failed to fetch diff:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch diff');
    } finally {
      setLoading(false);
    }
  }, [ignoreWhitespace]);

  // Initial fetch
  useEffect(() => {
    if (strategyRef.current) {
      void fetchDiff();
    }
  }, [fetchDiff]);

  // Sync comments function
  const syncComments = useCallback(
    async (comments: DiffComment[]) => {
      if (!strategyRef.current || !strategyRef.current.syncComments) {
        console.warn('Current strategy does not support comment syncing');
        return;
      }

      try {
        await strategyRef.current.syncComments(comments);
        onCommentsSync?.(comments);
      } catch (err) {
        console.error('Failed to sync comments:', err);
        throw err;
      }
    },
    [onCommentsSync]
  );

  // Watch for file changes
  useEffect(() => {
    if (!strategyRef.current || !strategyRef.current.watchFiles) {
      return;
    }

    const cleanup = strategyRef.current.watchFiles(() => {
      void fetchDiff();
    });

    return cleanup;
  }, [fetchDiff]);

  return {
    diffData,
    loading,
    error,
    strategy,
    refetch: fetchDiff,
    syncComments,
    canSyncComments: strategy?.capabilities.canSyncComments ?? false,
    canWatchFiles: strategy?.capabilities.canWatchFiles ?? false,
    canFetchBlobs: strategy?.capabilities.canFetchBlobs ?? false,
  };
}
