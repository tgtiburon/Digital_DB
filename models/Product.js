// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns id, product_name, price, stock, category_id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false

    }, 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    price: {
      // set decimal to 2 points for dollars.
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        // validates it is a decimal
        isDecimal: true
      }

    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        // value is numeric
        isNumeric: true
      }

    },
    category_id: {
      type:DataTypes.INTEGER,
      // references the category model's id
      references: {
        model: 'category',
        key: 'id'
      }
    }

  },
  {
    // Product table settings
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
