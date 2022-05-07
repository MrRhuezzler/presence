import { Router } from "express";
import pingRouter from "./ping.js";
import userRouter from './user.js';
import authRouter from './auth.js';

const router = Router();

router.use('/ping', pingRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

export default router;