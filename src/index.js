"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./models/server");
var dotenv_1 = require("dotenv");
//configuration variables ambient
dotenv_1.default.config();
var server = new server_1.default();
