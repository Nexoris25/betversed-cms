export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4e5b2a9c8d7e6f1a2b3c4d5e6f7a8b9'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'kJ9mPqW2xY7zT3rQ8vL6nB4mF2hR5tK'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'pR3vN6mB8xT2kL9qW4zY7hF5tJ2rC1v'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'xZ7qT2mB9rL4kW3vN6hY8tF5jP2cR1a'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});