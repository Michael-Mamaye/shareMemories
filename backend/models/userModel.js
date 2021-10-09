import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{
        type:String,
        require:[true, 'name is required']
    },
    email:{
        type:String,
        require:[true,'email is required'],
        unique:[true,'This email is already Registered'],
        },
    password:{
        type:String,
        require:[true,'password is required'],
        },
    date:{
        type:Date,
        default:new Date
    }
    
    
})

const userModel=mongoose.model('userModel',userSchema)

export default userModel;