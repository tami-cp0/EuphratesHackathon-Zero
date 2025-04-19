"use strict";

const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const MongoClient = require("mongodb").MongoClient;
const http = require("http");
const marked = require("marked");
const app = express();
const routes = require("./app/routes");
const { port, db, cookieSecret } = require("./config/config");

MongoClient.connect(db, {
  ssl: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err, client) => {
  if (err) {
    console.log("Error: DB: connect");
    console.log(err);
    process.exit(1);
  }
  console.log(`Connected to the database`);
  
  // Get database object from client
  const database = client.db();

  app.use(favicon(__dirname + "/app/assets/favicon.ico"));

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(
    session({
      secret: cookieSecret,
      saveUninitialized: true,
      resave: true,
    })
  );

  // ⬇️ Configure EJS and layout support
  app.set("view engine", "ejs");
  app.set("views", `${__dirname}/app/views`);
  app.use(expressLayouts);
  app.set("layout", "layout"); // default layout: app/views/layout.ejs

  // ⬇️ Automatically use tutorial layout for /tutorial/* routes
  app.use("/tutorial", (req, res, next) => {
    res.locals.layout = "tutorial/layout"; // maps to app/views/tutorial/layout.ejs
    next();
  });

  // Static assets
  app.use(express.static(`${__dirname}/app/assets`));

  // Markdown parser
  marked.setOptions({
    sanitize: true,
  });
  app.locals.marked = marked;

  // App routes - pass database instead of client
  routes(app, database);

  http.createServer(app).listen(port, () => {
    console.log(`Express http server listening on port ${port}`);
  });
});