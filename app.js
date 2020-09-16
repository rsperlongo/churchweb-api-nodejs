const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://ricardo:carmem@2018@ricardo0.vrxdu.mongodb.net/churweb-database', {
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const membersRouter = require('./routes/members');
const eventsRouter = require('./routes/events');

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./models');
const { role } = require('./models');
const { count } = require('console');
const Role = db.role;

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/members', membersRouter);
app.use('/events', eventsRouter);

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if(!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if(err) {
          console.log("err", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if(err) {
          console.log("error", err);
        }

          console.log("added 'moderator' to collections")
      });

      new Role({
        name: "admin"
      }).save(err => {
        if(err) {
          console.log("error", err);
        }

        console.log("added 'admin' to collections")
      });
    }
  });
}

module.exports = app;
