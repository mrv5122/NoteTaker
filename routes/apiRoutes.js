// require note model
var Note = require("../models/note.js");

// Routes
module.exports = (app) => {

  // get all notes route
  app.get("/api/allNotes", function(req, res) {
    Note.findAll({}).then(function(results) {
      res.json(results);
      console.log(results);
    });
  });

  // get note by title route
  app.get("/api/:note", function(req, res) {
    if (req.params.note) {
      Note.findAll({
        where: {
          title: req.params.note
        }
      }).then(function(results) {
        res.json(results);
        console.log(results);
      });
    }
  });

  // find note by id
  app.get("/api/:note", function(req, res) {
    if (req.params.note) {
      Note.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
        console.log(results);
      });
    }
  });

  // add a note
  app.post("/api/newnote", function(req, res) {
    Note.create({
      title: req.body.title,
      body: req.body.body
    });
  });

  // delete a note
  app.post("/api/delete", function(req, res) {
    Note.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  // edit a note
  // delete a note
  app.put("/api/edit", function(req, res) {
    Note.edit({
      where: {
        id: req.body.id
      }
    });
  });

};