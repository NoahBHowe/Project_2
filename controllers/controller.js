const Ink = require('../models/ink');
const controller = {};
const timestamp = require('time-stamp');


controller.index = (req, res) => {
  Ink
    .findAll()
    .then(data => res.render('ink/index', {ink: data}))
    .catch(err => console.log('Error:', err));
}

controller.new = (req, res) => {
  res.render('ink/new');
}

controller.show = (req, res) => {
  Ink
    .findById(req.params.id)
    .then(data => res.render('ink/show', {ink: data}))
    .catch(err => console.log('ERROR:', err));
}

controller.create = (req, res) => {
  Ink
    .save(req.body.ink, timestamp('MM/DD/YYYY'))
    .then(() => res.redirect('/ink'))
    .catch(err => console.log('ERROR:', err));
}

controller.update = (req, res) => {
  Ink
    .update(req.body.ink, req.params.id)
    .then(data => res.redirect('/ink'))
    .catch(err => console.log('ERROR:', err));
}

controller.edit = (req, res) => {
  Ink
  .findById(req.params.id)
  .then( data => res.render('ink/edit', {ink: data}))
  .catch(err => console.log('ERROR:', err));
}

controller.destroy = (req, res) => {
  Ink
    .destroy(req.params.id)
    .then(() => res.redirect('/ink'))
    .catch(err => console.log('ERROR:', err));
}

controller.like = (req, res) => {
  Ink
    .like(req.params.id)
    .then(() => res.redirect('/ink'))
    .catch(err => console.log('ERROR:', err));
}





module.exports = controller;
