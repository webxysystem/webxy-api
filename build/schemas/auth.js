"use strict";

const userRegisterSchema = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    userName: {
      type: "string"
    },
    email: {
      type: "string"
    },
    password: {
      type: "string"
    },
    birthDate: {
      type: "date"
    },
    numberPhone: {
      type: "string"
    },
    type: {
      type: "number"
    }
  },
  required: ["name", "email", "password", "birthDate", "type"],
  additionalProperties: true
};
const userLoginSchema = {
  type: "object",
  properties: {
    email: {
      type: "string"
    },
    password: {
      type: "string"
    }
  },
  required: ["email", "password"],
  additionalProperties: false
};
module.exports = {
  userRegisterSchema,
  userLoginSchema
};