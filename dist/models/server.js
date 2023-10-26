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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const producto_1 = __importDefault(require("../routes/producto"));
const user_1 = __importDefault(require("../routes/user"));
const producto_2 = __importDefault(require("./producto"));
class Server {
    constructor() {
        // console.log(process.env.PORT);
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3030';
        this.listen();
        //important to place this function before the routes to parse the data.
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplication server running on port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'api working'
            });
        });
        this.app.use('/api/products', producto_1.default);
        this.app.use('/api/users', user_1.default);
    }
    midlewares() {
        //parse the body
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield producto_2.default.sync();
                // await db.authenticate();
                // console.log('Database connected');
            }
            catch (error) {
                console.log(error);
                console.log('Connection error DB');
            }
        });
    }
}
exports.default = Server;
