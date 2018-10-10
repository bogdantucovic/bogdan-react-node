const path = require("path");
const express = require('express');
const fileUpload = require('express-fileupload');
const passport = require('passport');
const authRoutes = require('./server/routes/auth');
const uploadRoutes = require('./server/routes/upload');
const postsRoutes = require('./server/routes/posts');
const usersRoutes = require('./server/routes/users');
const authMiddleware = require('./server/middlewares/auth');
const localRegisterStrategy = require('./server/passport/local-register');
const localLoginStrategy = require('./server/passport/local-login');

const app = express();

app.use(express.static(path.join(__dirname, './server/static/')));

app.use(express.json());
app.use(passport.initialize());
passport.use('local-register', localRegisterStrategy);
passport.use('local-login', localLoginStrategy);

app.use(fileUpload());
app.use('/auth', authRoutes);
app.use('/api', authMiddleware);
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/upload', uploadRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'server/static/index.html'));
});

app.set('port', (process.env.PORT || 3000));

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
