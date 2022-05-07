import { Router } from "express";
import { body } from "express-validator";
import { createNewRoom } from "../controllers/room.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { validationErrorHandler } from "../middleware/validationErrorHandler.js";

const router = Router();

router.post('/', [
    body('period_code').isString().withMessage('Enter a valid code').isLength({ min: 1 }).withMessage('Enter a valid code'),
], validationErrorHandler, isAuthenticated, createNewRoom);


export default router;