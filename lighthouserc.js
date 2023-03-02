module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
