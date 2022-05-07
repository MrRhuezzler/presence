import { Router } from "express";
import pingRouter from "./ping.js";
import userRouter from './user.js';
import authRouter from './auth.js';
import periodRouter from './period.js';
import roomRouter from './room.js';

const router = Router();

router.use('/ping', pingRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/periods', periodRouter);
router.use('/room', roomRouter);

export default router;