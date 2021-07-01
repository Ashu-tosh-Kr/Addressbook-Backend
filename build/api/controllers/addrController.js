"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddr = exports.deleteAddr = exports.addAddr = exports.getAddr = void 0;
const mongodb_1 = require("mongodb");
const database_1 = __importDefault(require("../../loaders/database"));
const getAddr = async (query) => {
    const dataCursor = await (await database_1.default()).collection('addresses').find(query);
    const data = await dataCursor.toArray();
    return data;
};
exports.getAddr = getAddr;
const addAddr = async (entry) => {
    await (await database_1.default()).collection('addresses').insertOne(entry);
};
exports.addAddr = addAddr;
const deleteAddr = async (id) => {
    await (await database_1.default()).collection('addresses').deleteOne({ _id: new mongodb_1.ObjectId(id) });
};
exports.deleteAddr = deleteAddr;
const updateAddr = async (id, update) => {
    await (await database_1.default()).collection('addresses').updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: update });
};
exports.updateAddr = updateAddr;
//# sourceMappingURL=addrController.js.map