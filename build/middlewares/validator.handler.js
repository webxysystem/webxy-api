"use strict";

var _boom = _interopRequireDefault(require("@hapi/boom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const {
      error
    } = schema.validate(data, {
      abortEarly: false
    });

    if (error) {
      next(_boom.default.badRequest(error));
    }

    next();
  };
}

module.exports = validatorHandler;