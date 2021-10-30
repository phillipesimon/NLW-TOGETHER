import { Router } from 'express';

import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

// importando os parematros do controller
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

// Definindo as rotas
router.post('/users', ensureAdmin, createUserController.handle);
router.post('/tags', createTagController.handle);
router.post('/login', authenticateUserController.handle);

export { router };
