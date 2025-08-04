export interface GitHubPullRequest {
  number: number;
  title: string;
  state: 'open' | 'closed' | 'merged';
  user: {
    login: string;
    avatar_url: string;
  };
  base: {
    ref: string;
    sha: string;
  };
  head: {
    ref: string;
    sha: string;
  };
  created_at: string;
  updated_at: string;
  merged_at: string | null;
  diff_url: string;
  patch_url: string;
  commits: number;
  additions: number;
  deletions: number;
  changed_files: number;
}

export interface GitHubPullRequestFile {
  sha: string;
  filename: string;
  status: 'added' | 'removed' | 'modified' | 'renamed' | 'copied' | 'changed' | 'unchanged';
  additions: number;
  deletions: number;
  changes: number;
  patch?: string;
  previous_filename?: string;
  blob_url: string;
  raw_url: string;
  contents_url: string;
}

export interface GitHubApiError {
  message: string;
  documentation_url?: string;
  status?: number;
}

export interface GitHubPrUrlParams {
  owner: string;
  repo: string;
  prNumber: number;
}
