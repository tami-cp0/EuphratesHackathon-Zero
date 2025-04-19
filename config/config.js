const _ = require("underscore");
const path = require("path");
const util = require("util");
const { config: dotenvConfig } = require("dotenv");

dotenvConfig();

const finalEnv = process.env.NODE_ENV || "development";

const allConf = require(path.resolve(__dirname + "/../config/env/all.js"));
const envConf =
  require(path.resolve(
    __dirname + "/../config/env/" + finalEnv.toLowerCase() + ".js"
  )) || {};

const appConfig = { ...allConf, ...envConf };

console.log(`Current Config:`);
console.log(util.inspect(appConfig, false, null));

module.exports = appConfig;
