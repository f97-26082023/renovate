module.exports = {
  branchPrefix: 'test-renovate/',
  username: 'bot',
  gitAuthor: 'Renovate Bot <bot@go2js.com>',
  onboarding: false,
  endpoint: 'https://git.go2js.com/api/v1/',
  platform: 'gitea',
  includeForks: true,
  dryRun: 'full',
  repositories: ['f97/go2js.com'],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
