import Joi from 'joi';

class JoiAsyncValidator {
  constructor(joi) {
    this.joi = joi;
  }

  validate(source, schema) {
    return new Promise((resolve, reject) => {
      this.joi.validate(source, schema, (error, value) => {
        if (error) {
          reject(error);
        }
        resolve(value);
      });
    });
  }

  get schemaDescriptor() {
    return this.joi;
  }
}

export default new JoiAsyncValidator(Joi);
