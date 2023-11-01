"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.loginUser = exports.newUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //validation in case the user already exists in the database 
    const user = yield user_1.default.findOne({ where: { username: username } });
    if (user) {
        res.status(400).json({
            msg: 'User ' + username + ' already exists'
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    //the number parameter is for the amount of security when setting the password but it consumes more resources
    console.log(hashedPassword);
    try {
        //User saved in the database
        yield user_1.default.create({
            username: username,
            password: hashedPassword
        });
        res.json({
            msg: 'User ' + username + ' created successfully'
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Upps error ", error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Login user',
        body
    });
};
exports.loginUser = loginUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; // Supongamos que estás pasando el ID del usuario a través de los parámetros de la URL.
        const { body } = req; // Supongamos que estás enviando los datos de actualización en el cuerpo de la solicitud.
        // Realiza la operación de actualización utilizando el modelo de usuario
        const updatedUser = yield user_1.default.update(body, // Datos de actualización
        {
            where: { id },
            returning: true, // Esto es necesario para obtener el registro actualizado
        });
        if (updatedUser[0] === 1) {
            // La actualización se realizó con éxito
            res.json({ msg: 'Usuario actualizado correctamente', updatedUser: updatedUser[1][0] });
        }
        else {
            // No se encontró el usuario o no se realizó la actualización
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    }
    catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'Error en la actualización del usuario' });
    }
});
exports.updateUser = updateUser;
