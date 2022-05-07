import { Router } from "express";
import { body } from "express-validator";
import { validationErrorHandler } from '../middleware/validationErrorHandler.js'
import { userLogin } from "../controllers/auth.js";

const router = Router();

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password')
], validationErrorHandler, userLogin);

export default router;