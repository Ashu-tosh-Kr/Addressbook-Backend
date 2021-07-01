"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addrRoutes_1 = __importDefault(require("./routes/addrRoutes"));
exports.default = () => {
    const app = express_1.Router();
    app.get('/', (req, res) => res.json({ msg: "hello" }));
    //TODO: add routes here...
    app.use('/addr', addrRoutes_1.default);
    return app;
};
//# sourceMappingURL=index.js.map