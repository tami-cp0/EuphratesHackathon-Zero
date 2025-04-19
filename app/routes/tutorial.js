const express = require("express");
const { environmentalScripts } = require("../../config/config");

const router = express.Router();

router.get("/", (req, res) => {
  "use strict";
  return res.render("tutorial/a1", {
    layout: "tutorial/layout",
    title: "A1 - Injection",
    environmentalScripts,
  });
});

const pages = [
  { route: "a1", title: "A1 - Injection" },
  { route: "a2", title: "A2 - Broken Authentication and Session Management" },
  { route: "a3", title: "A3 - Cross-Site Scripting (XSS)" },
  { route: "a4", title: "A4 - Insecure Direct Object References" },
  { route: "a5", title: "A5 - Security Misconfiguration" },
  { route: "a6", title: "A6 - Sensitive Data Exposure" },
  { route: "a7", title: "A7 - Missing Function Level Access Control" },
  { route: "a8", title: "A8 - Cross-Site Request Forgery (CSRF)" },
  { route: "a9", title: "A9 - Using Components with Known Vulnerabilities" },
  { route: "a10", title: "A10 - Unvalidated Redirects and Forwards" },
  { route: "redos", title: "ReDoS Regular Expressions DoS" },
  { route: "ssrf", title: "Server-Side Request Forgery (SSRF)" },
];

for (const page of pages) {
  router.get(`/${page.route}`, (req, res) => {
    "use strict";
    return res.render(`tutorial/${page.route}`, {
      layout: "tutorial/layout",
      title: page.title,
      environmentalScripts,
    });
  });
}

module.exports = router;
