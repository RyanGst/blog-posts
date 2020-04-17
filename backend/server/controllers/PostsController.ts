import PostsRepository from '../repositories/PostsRepository';
import * as httpStatus from 'http-status';


const sendReponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data })
}

class PostsController {
    constructor() { }

    create(req, res) {
        PostsRepository
            .create(req)
            .then(menus => sendReponse(res, httpStatus.OK, menus))
            .catch(err => console.error.bind(console, `Error ${err}`))
    }

    index(req, res) {
        PostsRepository.all(req.query)
            .then(menus => sendReponse(res, httpStatus.OK, menus))
            .catch(err => console.error.bind(console, `Error: ${err}`))
    }

}

export default new PostsController();
