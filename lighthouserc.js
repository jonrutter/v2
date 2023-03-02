module.exports = {
  ci: {
    collect: {
      staticDistDir: './.next/server/pages',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
