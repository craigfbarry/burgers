
//Dependencies
const Sequelize = require("sequelize");


// Creates mySQL connection using Sequelize
const sequelize = new Sequelize("burgers_db","root","C@esar99",
    {
        host:       "localhost",
        port:       3306,
        dialect:    "mysql",
        pool: {
          max: 5,
          min: 0,
          idle: 10000
    }
});

//Export the connection
module.exports = sequelize;