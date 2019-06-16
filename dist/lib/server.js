"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function init(port) {
    const app = express_1.default();
    app.listen(port, err => {
        if (!err) {
            console.info(`Server running: http://localhost:${port}`);
        }
        else {
            console.error(`Server could not be started at: ${port}`);
        }
    });
}
exports.init = init;
