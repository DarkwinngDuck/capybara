export default class BaseHttp {
  constructor({ logger = null, config = null }) {
    this.logger = logger;
    this.config = config;
  }

  start() {
    return this.execute();
  }
}
