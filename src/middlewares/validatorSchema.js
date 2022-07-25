import Ajv from "ajv";

const ajv = new Ajv();

const validateSchema = (object, schema, res, next) => {
  const validate = ajv.compile(schema)
  const valid = validate(object);
  if (!valid) {
    const error = { message: ajv.errors }
    console.log(ajv.errors);
    return res.status(403).send(error.message);
  } else {
    return next();
  }
}

module.exports = validateSchema;