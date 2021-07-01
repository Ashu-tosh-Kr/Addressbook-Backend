"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const joi_1 = __importDefault(require("joi"));
const addrController_1 = require("../controllers/addrController");
const addrRouter = express_1.Router();
exports.default = addrRouter
    .get('/', async (req, res) => {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string(),
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            res.status(422).json({ msg: "Validation Error" });
        }
        else {
            const data = await addrController_1.getAddr(value);
            res.status(200).json({ msg: "Found", data: data });
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
})
    .post('/', async (req, res) => {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            addr: joi_1.default.string().required()
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            res.status(422).json({ msg: "Validation Error" });
        }
        else {
            await addrController_1.addAddr(value);
            res.status(201).json({ msg: "Added" });
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
})
    .delete('/:id', async (req, res) => {
    try {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        const { value, error } = schema.validate({ id: req.params.id });
        if (error) {
            res.status(422).json({ msg: error });
        }
        else {
            await addrController_1.deleteAddr(value.id);
            res.status(201).json({ msg: "Deleted" });
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
})
    .patch('/:id', async (req, res) => {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string(),
            addr: joi_1.default.string()
        });
        const { value, error } = schema.validate(req.body);
        if (error) {
            res.status(422).json({ msg: "Validation Error" });
        }
        else {
            await addrController_1.updateAddr(req.params.id, value);
            res.status(201).json({ msg: "Updated" });
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Server Error" });
    }
});
//# sourceMappingURL=addrRoutes.js.map