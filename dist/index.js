"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./lib/server");
const cluster_1 = __importDefault(require("./lib/cluster"));
const cluster_2 = __importDefault(require("cluster"));
const DataFrame_1 = require("./_data/DataFrame");
//* Look for our cluster
function init(cb) {
    if (cluster_2.default.isMaster) {
        cluster_1.default();
    }
    else {
        server_1.init(8080);
        const df = new DataFrame_1.DataFrame();
        const d = [['Alex', 10], ['Bob', 12], ['Clarke', 13]];
        const res = df.DataFrame(d, null, ['Name', 'Age']);
        console.log(res);
    }
}
//* Run Server
init();
