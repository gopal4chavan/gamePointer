const express = require('express');
require('dotenv/config');

const routes = require('./src/routes');

const app = express();
app.use('/api/v1', routes);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('server start on post', port);
})