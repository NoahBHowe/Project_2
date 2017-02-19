const router = require('express').Router();

router.use('/ink', require('./controllers/'));

module.exports = router;
