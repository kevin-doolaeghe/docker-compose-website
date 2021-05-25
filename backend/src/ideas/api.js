const database = require('../database');

module.exports.getIdeas = (_, res) => {
  database('ideas').select().then(ideas => res.send(ideas)).catch(err => console.log(err));
};

module.exports.getIdea = (req, res) => {
  const id = req.params.id;
  database('ideas').select().where('id', id).then(ideas => res.send(ideas)).catch(err => console.log(err));
};

module.exports.postIdea = (req, res) => {
  const idea = req.body;
  database('ideas').insert(idea).then(() => res.send(idea)).catch(err => console.log(err));
};

module.exports.putIdea = (req, res) => {
  const idea = req.body;
  const id = req.params.id;

  database('ideas')
    .where('id', '=', id)
    .update(idea)
    .then(() => res.send(idea))
    .catch(err => console.log(err));
};

module.exports.deleteIdea = (req, res) => {
  const id = req.params.id;

  database('ideas')
    .where('id', '=', id)
    .delete()
    .then(() => res.send(id))
    .catch(err => console.log(err));
};
