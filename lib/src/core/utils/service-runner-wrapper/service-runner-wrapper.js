const wrapper = (serializer, runner) => (ServiceClass, paramsBuilder, dependencies) => {
  const { logger } = dependencies;
  return function handler(req, res) {
    const params = paramsBuilder(req);
    const response = runner(ServiceClass, dependencies, params);
    serializer(response, res, logger);
  };
};

export default wrapper;
