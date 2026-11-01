module.exports = {
  ci: {
    collect: {
      url: ['https://snrtech-del.github.io'],
      numberOfRuns: 2,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
      },
    },
  },
};
