import express from 'express';
import { signUpUser } from '../controllers/userController';

const router = express.Router();

router.post("/signup", signUpUser)

export default router;