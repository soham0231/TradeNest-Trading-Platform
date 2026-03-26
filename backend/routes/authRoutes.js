import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserSchema.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();  ///its like container that stored register and login routes and we will export this router to use in index.js

///register route for user registration
router.post("/register", async(req,res)=>{
 try{
    const {name,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new UserModel({
       name,
       email,
       password:hashedPassword
     });
     await newUser.save();
      res.json({message:"User registered successfully"});

   }
   catch(err){
    res.status(500).json(err);
    }

});

//login route for user authentication
router.post("/login", async(req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email});

    if(!user){
     return res.status(400).json("User not found");
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
     return res.status(400).json("Invalid password");
   }

   const token = jwt.sign(
   {id:user._id},
   process.env.JWT_SECRET,
   {expiresIn:"1d"}
   );

  res.json({token,user});
}
 catch(err){
  res.status(500).json(err);
  }

});

export default router;