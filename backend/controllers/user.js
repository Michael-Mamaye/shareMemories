import express from "express";
import userModel from "../models/userModel.js";
import {check,validationResult} from 'express-validator'
import bcrypt from 'bcrypt'
const router = express.Router();


export const addNewUser = async (req,res)=>{

    const{ name, email, password } =req.body;

    const salt= await bcrypt.genSalt(10);
    const Password= await bcrypt.hash(password,salt);

    
    try{
        const checkIfExist=userModel.findOne({email})
        console.log(checkIfExist)
        if(checkIfExist.email===email){
            res.status(400).json({EmailError:'User with this email already exist'})
        }
        else
        {
        userModel.create({name,email,Password})
        res.status(200).json({success:'Successfully created'})
        }
    }
    catch(err)
    {
        console.log(err.message)
        res.status(400).json({msg:'server error'})
    }

}

export const getUsersList= async(req,res)=>{
    try{
        const usersList=await userModel.find()
        res.status(200).json(usersList);

    }
    catch(err)
    {
        console.log('get user',err)
    }
}

export default router;