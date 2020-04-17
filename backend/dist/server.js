"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const configs_1 = require("./config/configs");
const http_1 = require("http");
let http = new http_1.Server(app_1.default.app);
http.listen(configs_1.port, () => {
    console.log(`server running in" + ${configs_1.port}`);
});
process.once('SIGUSR2', () => app_1.default.closedataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.once('SIGINT', () => app_1.default.closedataBaseConnection('connection crashed', () => process.exit(0)));
