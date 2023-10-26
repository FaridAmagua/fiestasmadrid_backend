"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Product = connection_1.default.define('Product', {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING
    },
    product_stock: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: true,
    updatedAt: true,
    freezeTableName: false // prevents the table from becoming pluriform
    //correct the driver because i want to change the name to product_id
});
exports.default = exports.Product;
