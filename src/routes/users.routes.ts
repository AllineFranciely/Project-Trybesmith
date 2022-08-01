import { Router } from 'express';

import UsersController from '../controllers/users.controllers';

const router = Router();

const usersController = new UsersController();

router.post('/users', usersController.createUser);

export default router;