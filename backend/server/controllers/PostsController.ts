import PostsRepository from "../repositories/PostsRepository";
import * as httpStatus from "http-status";
import { Request, Response } from "express";

const sendReponse = function (res, statusCode, data) {
  res.status(statusCode).json({ result: data });
};

class PostsController {
  create(req, res) {
    PostsRepository.create(req)
      .then((menus) => sendReponse(res, httpStatus.OK, menus))
      .catch((err) => console.error.bind(console, `Error ${err}`));
  }

  get(req: Request, res) {
    PostsRepository.get(req.query)
      .then((menus) => sendReponse(res, httpStatus.OK, menus))
      .catch((err) => console.error.bind(console, `Error: ${err}`));
  }
}

export default new PostsController();
