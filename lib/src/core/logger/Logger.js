export default class Logger {
  // TODO: rename configuration
  constructor({ logger, logging }) {
    this.log = logger.configure(logging);
  }

  get logger() {
    return this.log.getLogger();
  }
}
