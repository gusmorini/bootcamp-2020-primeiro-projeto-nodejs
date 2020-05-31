import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    return response.json({ message: 'users' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
