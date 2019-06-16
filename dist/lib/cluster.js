"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
function default_1() {
    //* Cunt the machine's CPU's
    const cpuCount = os_1.default.cpus().length;
    for (let i = 0; i < cpuCount; i++) {
        cluster_1.default.fork();
    }
    //* Listen for dying workers
    cluster_1.default.on('exit', () => {
        cluster_1.default.fork();
    });
}
exports.default = default_1;
