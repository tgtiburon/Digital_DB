// Hide credentials with dotenv
require('dotenv').config();
// import the Sequelize Constructor from the library
const Sequelize = require('sequelize');
let sequelize;





// TODO:  For when it is live using jawsdb
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

if(process.env.JAWSDB_URL) {
  // If JAWSDB_URL is found then use this.

  sequelize = new Sequelize(process.env.JAWSDB_URL);
}else {
 
  // If no JAWSDB_URL then use local for dev purposes
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
     decimalNumbers: true,
    },

  });
}

module.exports = sequelize;
