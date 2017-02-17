const router = require('express').Router();

const controller = require('./controller');

router.put('/:id/like', controller.like);

router.get('/:id/edit', controller.edit);

router.get('/new', controller.new);

router.get('/:id', controller.show);

router.delete('/:id', controller.destroy);

router.get('/', controller.index);

router.put('/:id', controller.update);

router.post('/', controller.create);




module.exports = router;
