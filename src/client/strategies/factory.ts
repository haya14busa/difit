import { LocalFileStrategy } from './LocalFileStrategy';
import { ServerApiStrategy } from './ServerApiStrategy';
import { type DiffSourceStrategy } from './types';

export type DiffSourceType = 'local' | 'server' | 'github-pr';

export class DiffSourceFactory {
  static create(type: DiffSourceType): DiffSourceStrategy {
    switch (type) {
      case 'local':
        return new LocalFileStrategy();
      case 'server':
        return new ServerApiStrategy();
      case 'github-pr':
        // Placeholder for future GitHub PR adapter
        throw new Error('GitHub PR adapter not yet implemented');
      default:
        throw new Error(`Unknown diff source type: ${type}`);
    }
  }

  static detectType(): DiffSourceType {
    // Check if we're running from a file:// URL
    const isFileProtocol = window.location.protocol === 'file:';

    // Check for data-static-mode attribute
    const rootElement = document.getElementById('root');
    const hasStaticAttribute = rootElement?.dataset.staticMode === 'true';

    if (isFileProtocol || hasStaticAttribute) {
      return 'local';
    }

    // Future: detect GitHub PR mode from URL params or config
    // const urlParams = new URLSearchParams(window.location.search);
    // if (urlParams.get('pr')) {
    //   return 'github-pr';
    // }

    return 'server';
  }
}
