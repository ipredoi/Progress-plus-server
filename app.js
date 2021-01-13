var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
let cors = require('cors');
var logger = require('morgan');

require('dotenv').config();
// var firebase = require('firebase-admin');
// var serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

var indexRouter = require('./routes/index');
var feedbackRouter = require('./routes/feedback');

var app = express();

// const firebaseApp = firebase.initializeApp({
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL: process.env.databaseURL,
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/feedback', feedbackRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app };
