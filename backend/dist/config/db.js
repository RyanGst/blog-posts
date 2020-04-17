"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const configs_1 = require("./configs");
class Database {
    constructor() {
        this.DB_URI = configs_1.db;
    }
    createConnection() {
        mongoose.connect(this.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this.logger(this.DB_URI);
    }
    logger(uri) {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on("connected", () => console.log(`Moogose is connected in ${uri}`));
        this.DB_CONNECTION.on("error", (error) => console.error.bind(console, `Connection Error: ${error}`));
        this.DB_CONNECTION.on("disconnected", () => console.log(`Moogose is disconnected in ${uri}`));
    }
    closeConnection(message, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`Mongoose was desconeted by: ${message}`);
            callback();
        });
    }
}
exports.default = Database;
