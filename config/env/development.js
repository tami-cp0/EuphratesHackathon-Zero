module.exports = {
  // If you want to debug regression tests, you will need the following which is also in the test config:
  zapHostName: process.env.ZAP_HOSTNAME_DEV,
  zapPort: process.env.ZAP_PORT_DEV,
  // Required from Zap 2.4.1. This key is set in Zap Options -> API _Api Key.
  zapApiKey: process.env.ZAP_API_KEY_DEV,
  // Required if debugging security regression tests.
  zapApiFeedbackSpeed: 5000, // Milliseconds.
  environmentalScripts: [
    // jshint -W101
    `<script>document.write("<script src='http://" + (location.host || "localhost").split(":")[0] + ":35729/livereload.js'></" + "script>");</script>`,
    // jshint +W101
  ],
};
