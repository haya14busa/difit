import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

import { GitDiffParser } from '../shared/git-parser.js';
import { type DiffResponse } from '../types/diff.js';

import { generateStaticHtml } from './html-generator.js';

export interface ExportOptions {
  targetCommitish: string;
  baseCommitish: string;
  mode: string;
}

export interface ExportStdinOptions {
  diffContent: string;
  mode: string;
}

export interface StaticDiffData {
  ignoreWhitespace: DiffResponse;
  showWhitespace: DiffResponse;
  mode: string;
  baseCommitish: string;
  targetCommitish: string;
}

export async function exportStaticSite(outputDir: string, options: ExportOptions): Promise<void> {
  // Create output directory
  await mkdir(outputDir, { recursive: true });

  // Create parser instance
  const parser = new GitDiffParser();

  // Generate diff data for both whitespace modes
  const ignoreWhitespace = await parser.parseDiff(
    options.targetCommitish,
    options.baseCommitish,
    true
  );

  const showWhitespace = await parser.parseDiff(
    options.targetCommitish,
    options.baseCommitish,
    false
  );

  // Prepare static data
  const staticData: StaticDiffData = {
    ignoreWhitespace,
    showWhitespace,
    mode: options.mode,
    baseCommitish: options.baseCommitish,
    targetCommitish: options.targetCommitish,
  };

  // Write diff data as JSON
  await writeFile(join(outputDir, 'diff-data.json'), JSON.stringify(staticData), 'utf-8');

  // Generate static HTML
  await generateStaticHtml(outputDir);
}

export async function exportStaticSiteFromStdin(
  outputDir: string,
  options: ExportStdinOptions
): Promise<void> {
  // Create output directory
  await mkdir(outputDir, { recursive: true });

  // Create parser instance
  const parser = new GitDiffParser();

  // Parse stdin diff
  const diffData = parser.parseStdinDiff(options.diffContent);

  // Prepare static data
  // For stdin, we use the same diff data for both whitespace modes
  // since we can't regenerate it with different options
  const staticData: StaticDiffData = {
    ignoreWhitespace: diffData,
    showWhitespace: diffData,
    mode: options.mode,
    baseCommitish: 'stdin',
    targetCommitish: 'stdin',
  };

  // Write diff data as JSON
  await writeFile(join(outputDir, 'diff-data.json'), JSON.stringify(staticData), 'utf-8');

  // Generate static HTML
  // Note: Image extraction is skipped for stdin diffs
  await generateStaticHtml(outputDir);
}
