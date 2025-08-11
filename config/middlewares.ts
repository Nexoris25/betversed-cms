// config/middlewares.ts
export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // allow Strapi/CKEditor & dev tools to connect (add ws/wss for dev)
          'connect-src': ["'self'", 'https:', 'http:', 'ws:', 'wss:'],
          // images/media inside admin/editor
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          // admin and plugin scripts
          'script-src': ["'self'", 'https:', "'unsafe-inline'"],
          // Google Fonts (or remove these if you self-host)
          'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
          // (optional) enable embedded previews in plugins/editors
          'frame-src': ["'self'", 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
