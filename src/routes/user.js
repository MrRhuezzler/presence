import { Router } from "express";
import { body } from "express-validator";
import { createNewUser } from "../controllers/user.js";
import { validationErrorHandler } from "../middleware/validationErrorHandler.js";

const router = Router();

router.post('/', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('name').isLength({ min: 3 }).withMessage('Please enter a valid name'),
    body('password').isLength({ min: 6 }).withMessage('Please enter a valid password'),
], validationErrorHandler, createNewUser);


export default router;