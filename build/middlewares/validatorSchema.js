"use strict";

var _ajv = _interopRequireDefault(require("ajv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ajv = new _ajv.default();

const validateSchema = (object, schema, res, next) => {
  const validate = ajv.compile(schema);
  const valid = validate(object);

  if (!valid) {
    const error = {
      message: ajv.errors
    };
    console.log(ajv.errors);
    return res.status(403).send(error.message);
  } else {
    return next();
  }
};

module.exports = validateSchema;