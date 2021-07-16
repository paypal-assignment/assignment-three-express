const express = require('express');
const path = require('path');
const salesPage = require('./router/sales');
const customerPage = require('./router/customer');
const errorHandler = require('./error/404');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(salesPage);
app.use(customerPage);
app.use(errorHandler);

app.listen(3000);
