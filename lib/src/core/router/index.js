import { Router } from 'express';
import compression from 'compression';

import AppRouter from './Router';

const router = new AppRouter({
  router: Router,
  compression,
});

export default router;
