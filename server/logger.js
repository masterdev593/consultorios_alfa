const chalk = require('chalk');
const ip = require('ip');
const createDebugger = require('debug');

const divider = chalk.gray('\n-----------------------------------');
const ok = chalk.bgGreen;
const log = createDebugger('> CONSULTORIOS:servidor');

log.enabled = true;

const logger = {
  error: err => {
    console.error(chalk.red(err));
  },

  msj: msj => {
    log(msj);
  },

  appStarted: (port, host, isBeta) => {
    log(`El servidor esta trabajando! ${chalk.green('✓✓✓')}`);

    if (isBeta) {
      log(ok('----------------------------------------'));
      log(ok('---            BETA                  ---'));
      log(ok('----------------------------------------'));
    }
    log(`
      Sistema Operativo ${process.platform}${divider}
      ${chalk.bold('Accesos WEB')}
      :::Localhost: ${chalk.magenta(`${host}`)}
            :::LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
      ${chalk.blue(`Presione ${chalk.italic('CTRL-C')} para detener.`)}
    `);
  }
};

module.exports = logger;
