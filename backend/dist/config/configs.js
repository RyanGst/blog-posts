"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: path_1.resolve(__dirname, "../../.env") });
exports.jwt_secret = process.env.JWT_SECRET;
exports.port = process.env.PORT;
exports.db = process.env.DB;
exports.ip = process.env.IP || '10.0.0.39';
