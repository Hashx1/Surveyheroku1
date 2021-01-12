const express = require('express');
const mongoose = require('mongoose');
const keys = require('./Config/keys');
const passport = require('passport');
require('./Model/User');
require('./Services/passport');
const cookieSession=require('cookie-session');
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge:20*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./Routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
