"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./lib/server");
const cluster_1 = __importDefault(require("./lib/cluster"));
const cluster_2 = __importDefault(require("cluster"));
//* Look for our cluster
function init() {
    if (cluster_2.default.isMaster) {
        cluster_1.default();
    }
    else {
        server_1.init(8080);
    }
}
//* Run Server
init();
