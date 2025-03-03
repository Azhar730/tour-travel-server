import { NextFunction, Request, Response, Router } from 'express';
import { userController } from './user.controller';
import { userValidation } from './user.validation';

const userRouter = Router();

userRouter.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parseBody = await userValidation.userValidationSchema.parseAsync(
        req.body,
      );
      req.body = parseBody;
      next();
    } catch (error) {
      next(error);
    }
  },
  userController.createUser,
);
userRouter.get('/:userId', userController.getSingleUser);
userRouter.put('/:userId', userController.updateUser);
userRouter.delete('/:userId', userController.deleteUser);
userRouter.get('/', userController.getAllUser);

export default userRouter;
