import bodyParser from 'body-parser';
import http from 'http';
import express from 'express';

import BaseHttp from '../base-http';

// TODO: needs research && refactor injection dependencies

export default class ExpressHttpServer extends BaseHttp {
  constructor({ config, logger, router }) {
    super({ config, logger });
    this.router = router;
    this.app = express();
    this.setup();
  }

  execute() {
    const { port } = this.config.app;
    this.app.set('port', port);
    this.server = http.createServer(this.app);
    this.server.listen(port);
    this.addListeners();
  }

  setup() {
    this.app.disable('x-powered');
    this.app.use(bodyParser.json());
    this.app.use(this.router.rootRouter);
  }

  addListeners() {
    this.server.on('error', (error) => {
      this.logger.error(error);
    });
    this.server.on('listening', () => {
      const { port: httpPort } = this.server.address();
      this.logger.info(`[p ${process.pid}] Listening at port ${httpPort}`);
      this.logger.info(`node version ${process.version}`);
    });
  }
}
