module.exports = {
  username: 'bot',
  gitAuthor: 'Renovate Bot <bot@go2js.com>',
  endpoint: 'https://git.go2js.com/api/v1/',
  platform: 'gitea',
  repositories: [
    'f97/gist',
    'f97/go2js.com',
    'phoenix/phoenix'
  ],
  packageRules: [
    {
      automerge: false,
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
