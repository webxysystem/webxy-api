"use strict";

var _transaction = _interopRequireDefault(require("../models/transaction"));

var _publication = require("./publication");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getType = type => {
  let typeReturn = {
    type,
    name: ''
  };

  switch (type) {
    case 1:
      typeReturn.name = 'subscription';
      break;

    case 2:
      typeReturn.name = 'buyAsset';
      break;

    case 3:
      typeReturn.name = 'buyProduct';
      break;

    case 4:
      typeReturn.name = 'TransferCoins';
      break;

    default:
      typeReturn.name = 'TransferCoins';
      break;
  }

  return typeReturn;
};

const getProductById = id => {
  return {
    id
  };
};

const addTransaction = async transaction => {
  if (transaction.type == 2 || 3) {
    transaction.type == 2 ? transaction.product = await (0, _publication.getPublicationById)(transaction.product) : transaction.product = getProductById(transaction.product);
  }

  transaction.type = getType(transaction.type);
  return await _transaction.default.create(transaction);
};

module.exports = {
  addTransaction
};