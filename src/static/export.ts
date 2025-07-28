import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

import { GitDiffParser } from '../shared/git-parser.js';
import { type DiffResponse } from '../types/diff.js';

export interface ExportOptions {
  targetCommitish: string;
  baseCommitish: string;
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
}
