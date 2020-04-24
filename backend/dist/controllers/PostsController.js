"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostsRepository_1 = require("../repositories/PostsRepository");
const httpStatus = require("http-status");
const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json({ result: data });
};
class PostsController {
    create(req, res) {
        PostsRepository_1.default.create(req)
            .then((menus) => sendReponse(res, httpStatus.OK, menus))
            .catch((err) => console.error.bind(console, `Error ${err}`));
    }
    get(req, res) {
        PostsRepository_1.default.get(req.query)
            .then((menus) => sendReponse(res, httpStatus.OK, menus))
            .catch((err) => console.error.bind(console, `Error: ${err}`));
    }
}
exports.default = new PostsController();
