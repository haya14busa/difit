/**
 * Check if the application is running in static mode
 * In static mode, the app loads diff data from a JSON file instead of making API calls
 */
export function isStaticMode(): boolean {
  return document.getElementById('root')?.dataset.staticMode === 'true';
}
