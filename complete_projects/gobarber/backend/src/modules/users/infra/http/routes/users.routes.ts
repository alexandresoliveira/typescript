import { Router } from 'express';
import multer from 'multer';

import authMiddleware from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import uploadConfig from '@config/upload';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '@modules/users/infra/http/controllers/UsersController';
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';

const usersRoutes = Router();
const upload = multer(uploadConfig.multer);
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    },
  }),
  usersController.create
);

usersRoutes.patch(
  '/avatar',
  authMiddleware,
  upload.single('avatar'),
  userAvatarController.update
);

export default usersRoutes;
