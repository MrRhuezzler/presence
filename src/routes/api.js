import { Router } from "express";
import pingRouter from "./ping.js";

const router = Router();

router.use('/ping', pingRouter);

export default router;