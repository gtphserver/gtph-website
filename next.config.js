module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/register', // Redirect root of subdomain to /register
      },
    ];
  },
};
