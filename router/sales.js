const express = require('express');
const path = require('path');
const router = express.Router();
//const staticHelperCss = require('../helper/helperCss.css')

router.get('/users', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'salesPage.html'));
});
module.exports = router;
