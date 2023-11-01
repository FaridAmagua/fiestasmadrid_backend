"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Product = connection_1.default.define('Product', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    product_stock: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    freezeTableName: false,
    //correct the driver because i want to change the name to product_id
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    // Configura la función para generar las fechas
});
exports.default = exports.Product;
