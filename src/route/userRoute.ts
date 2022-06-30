import Router from 'express';
import userController from '../controller/userController';
const router = Router();

router.post('/user',userController);

export default router;