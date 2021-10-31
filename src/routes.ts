import { Router } from 'express';

import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUserController';

const router = Router();

// importando os parematros do controller
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

// Definindo as rotas
router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle,
);

router.get(
  '/user/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle,
);
router.get(
  '/user/compliments/receiver',
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle,
);

router.get('/users', ensureAuthenticated, listUserController.handle);

export { router };
