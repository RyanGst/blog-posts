import * as express from "express";

import Auth from '../config/auth';
import SessionController from '../controllers/SessionController';
import PostsController from '../controllers/PostsController'
import DashboardController from '../controllers/DashboardController'
import uploads from '../config/uploads'

export class Routes {
    private router: express.Router;

    public routes(app): void {

        app.route("/").get((req, res) => {
            res.send({ 'result': 'version 0.0.2' })
        });
        app.route("/sessions")
            .get(Auth.validate, SessionController.get)
            .post(SessionController.create);

        app.route("/login")
            .post(SessionController.login)

        app.get("/dashboard", DashboardController.get)
        app.post("/spots", uploads.single('thumbnail'), PostsController.create)
        app.get("/spots", PostsController.index)
    }
}
