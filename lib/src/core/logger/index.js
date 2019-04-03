import Log4js from 'log4js';

import config from '../../../config';
import Logger from './Logger';

const loggerInstance = new Logger({ logger: Log4js, ...config });
const { logger } = loggerInstance;

export default logger;
