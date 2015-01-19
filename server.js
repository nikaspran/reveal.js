'use strict';
var express = require('express'),
  url = require('url'),
  livereload = require('connect-livereload'),
  app = express();

app
  .use('/talk-web-components', express.static(__dirname + '/'))
  .use(livereload({port: 35729}));

module.exports = app;