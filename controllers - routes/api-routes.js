// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the book
  app.get("/api/main", function (req, res) {
    //findall returns  all entries for a table when used with no options
    db.Main.findAll({}).then(function (dbMain) {
      // We have access to the book as an argument inside of the callback function
      res.json(dbMain);

    });

  });

  // Get route for returning a book of a specific genres
  app.get("/api/main/genres/:genres", function (req, res) {
    db.Main.findAll({
        where: {
          genres: req.params.genres
        }
      })
      .then(function (dbMain) {
        res.json(dbMain);
      });
  });

  // Get route for retrieving a single book
  app.get("/api/main/:id", function (req, res) {
    db.Main.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function (dbMain) {
        res.json(dbMain);
      });
  });



};