import app from './src/app';

app.start().catch((error) => {
  app.logger.error(error.stack);
  process.exit(1);
});
