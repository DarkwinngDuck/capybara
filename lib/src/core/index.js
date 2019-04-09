import services from './services';
import utils from './utils';
import logger from './logger';
import server from './server';
import router from './router';
import CoreModule from './Core';

const core = new CoreModule({
  logger,
  router,
  server,
});

core.registerAPI({ namespace: 'services', api: services });
core.registerAPI({ namespace: 'utils', api: utils });

export default core;
