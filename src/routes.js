const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/user', UserController.store);
/*
routes.get('/', (req, res) => {
    res.json({ user: 'tobi' })
});
//*/

module.exports = routes;