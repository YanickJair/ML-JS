"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./lib/server");
const DataFrame_1 = require("./_data/DataFrame");
//* Look for our cluster
function init(cb) {
    server_1.init(8080);
    cb();
}
//* Run Server
init(() => {
    const df = new DataFrame_1.DataFrame();
    const data = [['Alex', 10], ['Bob', 12], ['Clarke', 13]];
    const res = df.DataFrame(data, null, ['Name', 'Age']);
    console.log(res);
});
