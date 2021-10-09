import express from "express";
import userModel from "../models/userModel.js";
import {check,validationResult} from 'express-validator'
const router = express.Router();


export const addNewUser = async (req,res)=>{

    const{ name, email, password } =req.body;
    
    try{
        const checkIfExist=userModel.findOne({email})
        if(checkIfExist){
            res.status(400).json({ErrorEmail:'User with this email exist'})
        }
        else
        {
        userModel.create({name,email,password})
        res.status(200).json(req.body)
        }
    }
    catch(err)
    {
        res.status(400).json({msg:'add new user error',err})
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