const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://ricardo:carmem@2018@ricardo0.vrxdu.mongodb.net/churweb-database', {
    useNewUrlParser: true,
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

const usersRouter = require('./routes/users');
const membersRouter = require('./routes/members');
const eventsRouter = require('./routes/events');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/members', membersRouter);
app.use('/events', eventsRouter);

app.listen(3000);

module.exports = app;
