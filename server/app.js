var express = require('express');
var usersRouter = require('./api/user/user.route.');

var app = express();

app.use(express.json());
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
