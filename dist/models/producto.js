"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Product = connection_1.default.define('PRODUCTS', {
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
