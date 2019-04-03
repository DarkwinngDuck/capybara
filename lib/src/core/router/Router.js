export default class AppRouter {
  constructor({ router, compression }) {
    this.versions = {};
    this.router = router;
    this.root = this.router();
    this.setup(compression);
  }

  get rootRouter() {
    return this.root;
  }

  addVersion(version = null) {
    this.versions[version] = this.router();
    this.root.use(`/api/${version}`, this.versions[version]);
  }

  attach({ version, path, subRouter }) {
    if (this.versions[version]) {
      this.versions[version].use(`/${path}`, subRouter);
    } else {
      throw new Error(`API version "${version}" is not registered`);
    }
  }

  setup(compression) {
    this.root.use(compression());
    this.addVersion('v1');
    this.versions.v1.get('/', (req, res) => {
      res.json({
        name: 'Capybara API',
        version: 'v1',
      });
    });
  }
}
