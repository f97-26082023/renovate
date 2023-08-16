module.exports = {
  username: 'f97',
  gitAuthor: 'Renovate Bot <huynhduckhoan@gmail.com>',
  endpoint: 'https://g.f97.xyz/api/v1/',
  platform: 'gitea',
  labels: ["Kind/Dependencies"],
  repositories: [
    'f97/f97.xyz',
    'f97/Dockerfile',
  ],
  packageRules: [
    {
      automerge: true,
      timezone: "Asia/Ho_Chi_Minh",
      automergeType: "squash",
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
