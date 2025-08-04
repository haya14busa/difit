import { LocalFileStrategy } from './LocalFileStrategy';
import { ServerApiStrategy } from './ServerApiStrategy';
import { type DiffSourceStrategy } from './types';

export type DiffSourceType = 'static' | 'server';

export class DiffSourceFactory {
  static create(type: DiffSourceType): DiffSourceStrategy {
    switch (type) {
      case 'static':
        return new LocalFileStrategy();
      case 'server':
        return new ServerApiStrategy();
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
      return 'static';
    }

    return 'server';
  }
}
