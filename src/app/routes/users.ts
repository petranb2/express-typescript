import { Router } from "express";
const router = Router();
import userController from '@controllers/userController'

/* GET users listing. */
router.get('/', userController.sendUser);

export default router;
