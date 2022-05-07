import { Router } from "express";
import { pong } from "../controllers/ping.js";

const router = Router();

router.get('/', pong);

export default router;