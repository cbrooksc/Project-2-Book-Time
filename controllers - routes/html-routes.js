// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/library", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/library.html"));
  });

  // bookTime route loads 
  app.get("/bookTime", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/.html"));
  });

};
