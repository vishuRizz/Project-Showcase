import User from '../models/user.model.js'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndCookie.js";

export const signUp = async(req,res)=>{
    const {email,password,name} = req.body;

    try {
        if(!email||!password||!name){
            throw new error('All fields are required')
        }

        const userAlreadyExists = await User.findOne({email});
        console.log("userAlreadyExists",userAlreadyExists);

        if(userAlreadyExists){
            return res.status(400).json({success:false,message:"User already exists"})


        }


        const user = new User({
            email,
            password,
            name,
        })

        await user.save();

         generateTokenAndSetCookie(res,user._id);


         res.status(201).json({
            success:true,
            message:"User created successfully",
            // user: {
			// 	...user._doc,
			// 	password: undefined,
			// },

         })
        
    } catch (error) {
        res.status(400).json({success:false, message:error.message})
    }
}
export const login = async(req,res)=>{
    const {email,password} = req.body;



    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message:"User not found with the email"})
        }
        if(password !== user.password){
            return res.status(400).json({success:false, message:"Invalid Credentials"})
        }

        generateTokenAndSetCookie(res,user._id);

        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            success:true,
            message: "Logged in successfully",
            user:{
                ...user._doc,
                password:undefined,
            }
        })

    } catch (error) {

        console.log("Error in login");
        res.status(400).json({success:false,message:error.message,password})
    }
}