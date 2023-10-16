"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = require("../db/connection");
var Product = connection_1.default.define('PRODUCTS', {
    product_name: {
        type: sequelize_1.DataTypes.STRING
    },
    product_stock: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true // prevents the table from becoming pluriform
});
exports.default = Product;
//correct the driver because i want to change the name to product_id
