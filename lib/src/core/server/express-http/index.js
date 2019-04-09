import ExpressHttpServer from './ExpressHttpServer';
import config from '../../../../config';
import logger from '../../logger';
import router from '../../router';

const server = new ExpressHttpServer({ config, logger, router });

export default server;
