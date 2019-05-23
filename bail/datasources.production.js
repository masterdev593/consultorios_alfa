var secrets = require('../config/secrets');

module.exports = {
  db: {
    connector: 'mongodb',
    connectionTimeout: 10000,
    url: secrets.db
  }
};
