import { readFile, rm } from 'fs/promises';
import { join } from 'path';

import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { exportStaticSite } from './export.js';

describe('Static Export Integration', () => {
  const testOutputDir = './test-integration-output';

  beforeEach(async () => {
    // Clean up any existing test output
    await rm(testOutputDir, { recursive: true, force: true });
  });

  afterEach(async () => {
    // Clean up test output
    await rm(testOutputDir, { recursive: true, force: true });
  });

  it('should export a complete static site with HTML and assets', async () => {
    // Export static site
    await exportStaticSite(testOutputDir, {
      targetCommitish: 'HEAD',
      baseCommitish: 'HEAD^',
      mode: 'side-by-side',
    });

    // Check that all files were created
    const indexHtml = await readFile(join(testOutputDir, 'index.html'), 'utf-8');
    expect(indexHtml).toContain('<!DOCTYPE html>');
    expect(indexHtml).toContain('window.__STATIC_MODE__ = true');
    expect(indexHtml).toContain('window.__STATIC_DIFF_DATA__');

    // Check diff data
    const diffData = await readFile(join(testOutputDir, 'diff-data.json'), 'utf-8');
    const parsedData = JSON.parse(diffData);
    expect(parsedData).toHaveProperty('ignoreWhitespace');
    expect(parsedData).toHaveProperty('showWhitespace');
    expect(parsedData).toHaveProperty('mode', 'side-by-side');
    expect(parsedData).toHaveProperty('baseCommitish', 'HEAD^');
    expect(parsedData).toHaveProperty('targetCommitish', 'HEAD');
  });

  it('should handle special commit references', async () => {
    await exportStaticSite(testOutputDir, {
      targetCommitish: 'working',
      baseCommitish: 'staged',
      mode: 'inline',
    });

    const diffData = await readFile(join(testOutputDir, 'diff-data.json'), 'utf-8');
    const parsedData = JSON.parse(diffData);
    expect(parsedData.mode).toBe('inline');
    expect(parsedData.ignoreWhitespace.commit).toContain('Working Directory');
  });

  it('should embed static data in HTML correctly', async () => {
    await exportStaticSite(testOutputDir, {
      targetCommitish: 'HEAD',
      baseCommitish: 'HEAD~2',
      mode: 'side-by-side',
    });

    const html = await readFile(join(testOutputDir, 'index.html'), 'utf-8');

    // Extract embedded JSON from HTML
    const jsonMatch = html.match(/window\.__STATIC_DIFF_DATA__ = JSON\.parse\((.*)\);/s);
    expect(jsonMatch).toBeTruthy();

    if (jsonMatch) {
      const embeddedData = JSON.parse(JSON.parse(jsonMatch[1]));
      expect(embeddedData).toHaveProperty('ignoreWhitespace');
      expect(embeddedData).toHaveProperty('showWhitespace');
      expect(embeddedData).toHaveProperty('targetCommitish', 'HEAD');
      expect(embeddedData).toHaveProperty('baseCommitish', 'HEAD~2');
    }
  });
});
