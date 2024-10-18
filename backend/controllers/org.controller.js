import { generateTokenAndSetCookie } from "../utils/generateTokenAndCookie.js";
import Organization from '../models/organization.model.js';

export const orgSignUp = async(req,res)=>{
    const {username,password,organizationType} = req.body;

    try {
        if(!username||!password){
            throw new error('All fields are required')
        }

        const userAlreadyExists = await Organization.findOne({username});
        console.log("userAlreadyExists",userAlreadyExists);

        if(userAlreadyExists){
            return res.status(400).json({success:false,message:"User already exists"})


        }


        const user = new Organization({
            username,
            password,
            organizationType
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
export const orglogin = async(req,res)=>{
    const {username,password} = req.body;



    try {
        const user = await Organization.findOne({username});
        if(!user){
            return res.status(400).json({success:false, message:"User not found with the username"})
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


    
