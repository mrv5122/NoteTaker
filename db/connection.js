var Sequelize = require('sequelize');

// create mysql connection using sequelize
var sequelize = new Sequelize("note_db", "root", "Omicronf15", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 1000
  }
});

// export connection
module.exports = sequelize;