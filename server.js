const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Product Detail
    server.get("/p/:id/:url", (req, res) => {
      const actualPage = "/detail";
      const queryParams = { id: req.params.id, url: req.params.url };
      app.render(req, res, actualPage, queryParams);
    });

    // Model
    server.get("/(*-parts)/(*-parts)", (req, res) => {
      const actualPage = "/model";
      const queryParams = { make: req.params[0], model: req.params[1] };
      app.render(req, res, actualPage, queryParams);
    });

    // Make
    server.get("/(*-parts)", (req, res) => {
      const actualPage = "/make";
      const queryParams = { make: req.params[0] };
      app.render(req, res, actualPage, queryParams);
    });

    // Static Content
    server.get("/content/:url", (req, res) => {
      const actualPage = "/content";
      const queryParams = { url: req.params.url };
      app.render(req, res, actualPage, queryParams);
    });

    // All
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
