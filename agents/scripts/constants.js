// Shared constants used by agent scripts.
// Adjust these for your project layout when porting to another repo.

export const MEMORY_OVERVIEW = 'agents/memory-bank.md';
export const MEMORY_DIR = 'agents/memory-bank';

// Inline code path prefixes to validate when found inside markdown backticks.
// i.e. these should be the paths where all your code is located (e.g. 'src/')
export const PATH_PREFIXES = ['apps/', 'packages/', 'cdk/'];

// Directories considered for drift checks between the stamped SHA and HEAD.
// i.e. these are probably the same as above (e.g. 'src/', 'packages/')
export const DRIFT_TRACKED_DIRS = ['apps', 'cdk', 'packages'];

// Root-level files that may be referenced inside memory bank markdown.
export const ROOT_BASENAMES = new Set([
  'README.md',
  'package.json',
  'package-lock.json',
  'agents/memory-bank.md',
]);

// Regex used to extract inline code tokens from markdown.
export const CODE_SPAN_REGEX = /`([^`]+)`/g;

