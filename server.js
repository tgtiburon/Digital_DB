const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// turn on connection to db and server
// force: false tells it to to not DROP tables
// but if we set it true it will drop...good for changing table structures.

sequelize.sync({ force: true }).then(() => {

  app.listen(PORT, ()=> console.log(`Now listening on port: ${PORT}!`));

});
