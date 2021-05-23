const api = require('./api');

module.exports = (router) => {
  router.get('/api/ideas', api.getIdeas);
  router.get('/api/ideas/:id', api.getIdea);
  router.post('/api/ideas', api.postIdea);
  router.put('/api/ideas/:id', api.putIdea);
  router.delete('/api/ideas/:id', api.deleteIdea);
};