export default async function responseSerializer(response, res, logger) {
  try {
    const data = await response;
    res.status(200).json(data);
    logger.info('REQUEST_OK');
  } catch (error) {
    res.status(403).json(error.message);
    logger.error(error);
  }
}
