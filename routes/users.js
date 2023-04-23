import { Router } from 'express';
import controller from '../cadastro.js';

const route = new Router();

route.post('/user', controller);

export default route;