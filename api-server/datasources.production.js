'use strict';

const secrets = require('../config/secrets');

module.exports = {
  mongods: {
    connector: 'mongodb',
    connectionTimeout: 10000,
    url: secrets.mongods
  }
};
