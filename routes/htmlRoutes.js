var path = require('path');

// html routes
module.exports = (app) => {

  // index route loads index.html
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // 'newnote' route loads addnote.html
  app.get('/newnote', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/addnote.html'));
  });

  // 'allnotes route loads allnotes.html
  app.get('/allnotes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/allnotes.html'));
  });
  
}