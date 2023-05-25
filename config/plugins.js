module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'mitenkumar.patel@aspiresoftserv.in',
        defaultReplyTo: 'mitenkumar.patel@aspiresoftserv.in',
      },
    },
  },
  // ...
});