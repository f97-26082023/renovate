module.exports = {
  username: 'f97',
  gitAuthor: 'Renovate Bot <huynhduckhoan@gmail.com>',
  endpoint: 'https://git.f97.xyz/api/v1/',
  platform: 'gitea',
  labels: ["Kind/Dependencies"],
  repositories: [
    'f97/f97.xyz',
    'f97/Dockerfile',
  ],
  packageRules: [
    {
      automerge: false,
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
