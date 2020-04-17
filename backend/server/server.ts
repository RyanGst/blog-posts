import App from "./app";

import { port } from './config/configs'

import { Server } from 'http'

let http = new Server(App.app);

http.listen(port, () => {
  console.log(`server running in" + ${port}`);
});

process.once('SIGUSR2', () => App.closedataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.once('SIGINT', () => App.closedataBaseConnection('connection crashed', () => process.exit(0)));
