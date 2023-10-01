"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('FiestasMadrid', 'root', 'root', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    dialectOptions: {
    // Aquí puedes agregar opciones adicionales si es necesario
    }
});
exports.default = sequelize;
