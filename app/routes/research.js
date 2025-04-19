const ResearchDAO = require("../data/research-dao").ResearchDAO;
const ESAPI = require("node-esapi");
const needle = require("needle");
const {
    environmentalScripts
} = require("../../config/config");

function ResearchHandler(db) {
    "use strict";

    const researchDAO = new ResearchDAO(db);
    const BASE = "https://finance.yahoo.com/quote/";

    this.displayResearch = (req, res) => {

        if (req.query.symbol) {

            const safeSymbol = ESAPI.encoder().encodeForURL(symbol);
            const url = BASE + safeSymbol;

            return needle.get(url, (error, newResponse, body) => {
                if (!error && newResponse.statusCode === 200) {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                }
                res.write("<h1>The following is the stock information you requested.</h1>\n\n");
                res.write("\n\n");
                if (body) {
                    res.write(body);
                }
                return res.end();
            });
        }

        return res.render("research", {
            environmentalScripts
        });
    };

}

module.exports = ResearchHandler;
