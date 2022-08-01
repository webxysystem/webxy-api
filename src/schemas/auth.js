const userRegisterSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    userName: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
    birthDate: { type: "string" },
    numberPhone: { type: "string" },
  },
  required: ["name", "userName", "email", "password", "birthDate", "numberPhone"],
  additionalProperties: false
};

const bodyRegisterSchema = {
  type: "object",
  properties: {
    type: { type: "number" },
    user: { type: "object" },
  },
  required: [ "type", "user"],
  additionalProperties: false
}

const userLoginSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: { type: "string" },
  },
  required: [ "email", "password"],
  additionalProperties: false
}


module.exports = {userRegisterSchema, bodyRegisterSchema, userLoginSchema}
