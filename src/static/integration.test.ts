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
    expect(indexHtml).toContain('data-static-mode="true"');

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

  it('should generate static data JSON file correctly', async () => {
    await exportStaticSite(testOutputDir, {
      targetCommitish: 'HEAD',
      baseCommitish: 'HEAD~2',
      mode: 'side-by-side',
    });

    const html = await readFile(join(testOutputDir, 'index.html'), 'utf-8');
    expect(html).toContain('data-static-mode="true"');

    // Check the separate JSON file
    const diffData = await readFile(join(testOutputDir, 'diff-data.json'), 'utf-8');
    const parsedData = JSON.parse(diffData);
    expect(parsedData).toHaveProperty('ignoreWhitespace');
    expect(parsedData).toHaveProperty('showWhitespace');
    expect(parsedData).toHaveProperty('targetCommitish', 'HEAD');
    expect(parsedData).toHaveProperty('baseCommitish', 'HEAD~2');
  });
});
