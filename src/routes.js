const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('<a href="https://github.com/Eduardo32/my-api" target="_blank" >github.com/Eduardo32/my-api</a>');
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;