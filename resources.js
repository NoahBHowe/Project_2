const router = require('express').Router();

router.use('/gif', require('./controllers/gif_controller'));

module.exports = router;
