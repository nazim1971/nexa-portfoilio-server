import { Router } from 'express';
import { validateMiddlewire } from '../../middlewire/validateRequest';
import { UserValidation } from '../user/user.validation';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validate';

const router = Router();

router.post(
  '/register',
  validateMiddlewire(UserValidation.userCreationSchema),
  AuthController.registerUser,
);

router.post(
  '/login',
  validateMiddlewire(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);

router.post('/refresh-token', AuthController.refreshToken);

export const AuthRoute = router;
