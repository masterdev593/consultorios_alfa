'use strict';

require('dotenv').config();
const pm2 = require('pm2');

const instances = process.env.INSTANCES || 1;
const serverName = process.env.SERVER_NAME || 'server';
const maxMemory = process.env.MAX_MEMORY || '390M';

pm2.connect(function() {
  pm2.start({
    name: serverName,
    script: 'api-server/production-start.js',
    exec_mode: 'cluster',
    instances: instances,
    max_memory_restart: maxMemory,
    NODE_ENV: 'production'
  }, function() {
    console.log(
      '> pm2 ejecutado %s con %s instancia y %s de memoria máxima',
      serverName,
      instances,
      maxMemory
    );
    pm2.disconnect();
  });
});
