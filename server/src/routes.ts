import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello to Typescript masterclass!' });
});

routes.get('/users', UserController.index);
routes.post('/users/create', UserController.create);

export default routes;
