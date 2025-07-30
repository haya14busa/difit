/**
 * Check if the application is running in static mode
 * In static mode, the app loads diff data from a JSON file instead of making API calls
 */
let staticModeCache: boolean | null = null;

export function isStaticMode(): boolean {
  // Return cached value if already determined
  if (staticModeCache !== null) {
    return staticModeCache;
  }

  // Check if we're running from a file:// URL
  const isFileProtocol = window.location.protocol === 'file:';

  // For initial check, look for the script tag with data attribute
  const scripts = document.getElementsByTagName('script');
  let hasStaticAttribute = false;

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (script && script.src && script.src.includes('index-') && script.src.includes('.js')) {
      // Check if root element has data-static-mode
      const rootElement = document.getElementById('root');
      hasStaticAttribute = rootElement?.dataset.staticMode === 'true';
      break;
    }
  }

  // Cache the result
  staticModeCache = isFileProtocol || hasStaticAttribute;
  return staticModeCache;
}
