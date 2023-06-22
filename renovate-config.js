const branchName = 'github-renovate';

const config = {
  branchPrefix: `${branchName}/`,
  dependencyDashboardTitle: 'Dependency Dashboard self-hosted',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  logLevel: 'debug',
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: 'github',
  repositories: [],
};

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module Renovate requires for its
 * configuration.
 */
export = config;
