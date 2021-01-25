import { Router } from 'express';
import { validationMiddleware, isDefinedParam } from '../middlewares';
import { UserDTO } from '../dtos';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from '../controllers/user.controller';

const router = Router();

router
  .get('/', getAllUsers)
  .get('/:id', isDefinedParam(), getOneUser)
  .post('/', validationMiddleware(UserDTO), createUser)
  .put(
    '/:id',
    isDefinedParam(),
    validationMiddleware(UserDTO, true),
    updateUser,
  )
  .delete('/:id', isDefinedParam(), deleteUser);

export default router;
