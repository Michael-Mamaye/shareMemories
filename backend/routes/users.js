import userModel from "../models/userModel.js";
import express from 'express';
import { getUsersList,addNewUser } from "../controllers/user.js";

const router=express.Router()

router.post('/', addNewUser);
router.get('/', getUsersList);

export default router;
