const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.index);
router.put('/:id/like', controller.like);

// router.put('/:id/time', controller.time);

router.get('/:id/edit', controller.edit);

router.get('/:id', controller.show);
router.get('/new', controller.new);


router.delete('/:id', controller.destroy);


router.put('/:id', controller.update);

router.post('/', controller.create);




module.exports = router;
