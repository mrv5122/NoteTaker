// pull in sequelize package
var Sequelize = require("sequelize");
// reference connection to databse
var sequelize = require("../db/connection.js");

// create note model
var Note = sequelize.define('note', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

// sync model with db
Note.sync();

// export note model
module.exports = Note;