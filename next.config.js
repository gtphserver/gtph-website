module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/register', // Redirect subdomain root to the register page
      },
      {
        source: '/login',
        destination: '/login', // Directly serve the login page
      },
    ];
  },
};
