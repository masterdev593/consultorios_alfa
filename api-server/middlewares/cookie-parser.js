'use strict';

const cookieParser = require('cookie-parser');

const cookieSecret = process.env.COOKIE_SECRET;
module.exports = cookieParser.bind(cookieParser, cookieSecret);
console.log('====================================');
console.log('+ MIDDLEWARE: [CookieParser]');
console.log('====================================');
