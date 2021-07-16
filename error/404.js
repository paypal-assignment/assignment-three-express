const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.status(404);
  res.send('<h1>Wrong request or Not Found!!</h1>');
});

module.exports = router;
