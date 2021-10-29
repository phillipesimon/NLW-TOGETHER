import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

// importando os parematros do controller
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// Definindo as rotas
router.post('/users', ensureAdmin, createUserController.handle);
router.post('/tags', createTagController.handle);

export { router };
