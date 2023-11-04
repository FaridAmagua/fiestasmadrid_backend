"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    console.log('headerToken');
    next();
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        //The client token
        const BearerToken = headerToken.slice(7);
        try {
            jsonwebtoken_1.default.verify(BearerToken, process.env.NODE_ENV || 'pass1123');
            console.log('bearerToken');
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: 'Invalid Token'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Access denied'
        });
    }
};
exports.default = validateToken;
