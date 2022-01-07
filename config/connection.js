// Hide credentials with dotenv
require('dotenv').config();
// import the Sequelize Constructor from the library
const Sequelize = require('sequelize');
//let sequelize;





// For when it is live using jawsdb
// Will use Jaws if available, otherwise check local.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });



module.exports = sequelize;
