module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '98018c04034d1ab2c9eafe67b5f2f7ab'),
  },
});
