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

  // POST route for saving a new main
  app.post("/api/main", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Main.create({
      title: req.body.title,
      author: req.body.author,
      genres:req.body.genres,
      published_year:req.body.published_year,
      summary:req.body.summary,
      url_link:req.body.url_link
    }).then(function(dbMain) {
      // We have access to the new  as an argument inside of the callback function
      res.json(dbMain);
    });
  });

  // DELETE route for deleting Main. We can get the id of the Main we want to delete from
  // req.params.id
  app.delete("/api/Main/:id", function(req, res) {
     // We just have to specify which todo we want to destroy with "where"
     db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });

  // PUT route for updating Main. We can get the updated main from req.body
  app.put("/api/Main", function(req, res) {

// Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      title: req.body.title,
      author: req.body.author,
      genres:req.body.genres,
      published_year:req.body.published_year,
      summary:req.body.summary,
      url_link:req.body.url_link
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbMain) {
      res.json(dbTodo);
    });
  });

};


 

