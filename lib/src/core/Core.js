export default class CoreModule {
  constructor({ logger, router, server }) {
    this.logger = logger;
    this.router = router;
    this.server = server;
    this.api = {};
  }

  get modules() {
    return this.api;
  }

  registerRouter(moduleRouter) {
    try {
      this.router.attach(moduleRouter);
      this.logger.info(`Router [${moduleRouter.name}] registered successfully`);
    } catch (error) {
      this.logger.error(error);
    }
  }

  registerAPI({ namespace, api }) {
    this.api[namespace] = api;
    this.logger.info(`API namespace [${namespace}] registered successfully`);
  }

  loadModule(moduleLoader) {
    moduleLoader(this);
  }
}
