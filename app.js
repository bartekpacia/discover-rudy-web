var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var mainRouter = require('./routes/main-router');
var mapRouter = require('./routes/map-router');
var zabytkiRouter = require('./routes/zabytki-router');
var lasyRouter = require('./routes/lasy-router');
var ciekawostkiRouter = require('./routes/ciekawostki-router');
var atrakcjeRouter = require('./routes/atrakcje-router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/mapa', mapRouter);
app.use('/zabytki/', zabytkiRouter);
app.use('/lasy-rudzkie/', lasyRouter);
app.use('/ciekawe-miejsca/', ciekawostkiRouter);
app.use('/atrakcje/', atrakcjeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
