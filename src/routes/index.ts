import { Router } from 'express';

import transactionRouter from './transaction.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
routes.use('/users', usersRouter);

export default routes;
