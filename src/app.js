const express = require('express');
const bodyParser = require('body-parser');

const catRoutes = require('./routes/cats');

const app = express();

app.use('/', (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

app.use(bodyParser.json());

app.use('/cats', catRoutes);

app.listen(4000, () => {
  console.log('Server running in port 4000');
});
