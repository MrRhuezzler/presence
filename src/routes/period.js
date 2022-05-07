import { Router } from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { getAllPeriods } from "../controllers/period.js";
const router = Router();

router.get('/', isAuthenticated, getAllPeriods);

export default router;