export default ({ env }) => ({
	auth: {
    secret: env('ADMIN_JWT_SECRET', 'a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '7fG2k9pX5mQz8wRtY3vN4A=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
