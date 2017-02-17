const Gif = require('../../models/gif');
const controller = {};

controller.index = (req, res) => {
  Gif
    .findAll()
    .then(data => res.render('gifs/index', {gifs: data}))
    .catch(err => console.log('Error:', err));
}

controller.new = (req, res) => {
  res.render('gifs/new');
}

controller.show = (req, res) => {
  Gif
    .findById(req.params.id)
    .then(data => res.render('gifs/show', {gif: data}))
    .catch(err => console.log('ERROR:', err));
}

controller.create = (req, res) => {
  Gif
    .save(req.body.gif)
    .then(() => res.redirect('/gif'))
    .catch(err => console.log('ERROR:', err));
}

controller.update = (req, res) => {
  Gif
    .update(req.body.gif, req.params.id)
    .then(data => res.redirect('/gif'))
    .catch(err => console.log('ERROR:', err));
}

controller.edit = (req, res) => {
  Gif
  .findById(req.params.id)
  .then( data => res.render('gifs/edit', {gif: data}))
  .catch(err => console.log('ERROR:', err));
}

controller.destroy = (req, res) => {
  Gif
    .destroy(req.params.id)
    .then(() => res.redirect('/gif'))
    .catch(err => console.log('ERROR:', err));
}

controller.like = (req, res) => {
  Gif
    .like(req.params.id)
    .then(() => res.redirect('/gif'))
    .catch(err => console.log('ERROR:', err));
}





module.exports = controller;
