export default async function serviceRunner(ServiceClass, dependencies, params) {
  const service = new ServiceClass(dependencies);
  const data = await service.run(params);
  return data;
}
