const express = require('express');

const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/authMiddleware');

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

module.exports = routes;
