import serviceRunner from './service-runner';
import responseSerializer from './response-serializer';
import wrapper from './service-runner-wrapper';

export default wrapper({ serializer: responseSerializer, runner: serviceRunner });
