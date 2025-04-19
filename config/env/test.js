module.exports = {
  // If you want to debug regression tests, you will need the following.
  zapHostName: process.env.ZAP_HOSTNAME_TEST,
  zapPort: process.env.ZAP_PORT_TEST,
  // Required from Zap 2.4.1. This key is set in Zap Options -> API _Api Key.
  zapApiKey: process.env.ZAP_API_KEY_TEST,
  zapApiFeedbackSpeed: 5000, // Milliseconds.
};
