const express = require("express");
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
var CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

//REGISTER

router.post("/register",[
    body('email','Enter a valid email').isEmail(),
    body('password','password must be of atleast 6 characters').isLength({ min: 6 }),
], async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
    }) 
    try{
        const user = await newUser.save()
        res.status(200).send(user)
    } catch(error){
        res.status(500).send(error)
    }
})

//LOGIN

router.post('/login', async (req,res)=>{
       
        try{
            const user = await User.findOne({email:req.body.email});
            if(!user){
                res.status(401).json('wrong email or password')
            } else {
                const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
                const originalText = bytes.toString(CryptoJS.enc.Utf8)

                if(originalText !== req.body.password){
                    res.status(401).json('wrong email or password')
                } else {
                    const accessToken = jwt.sign(
                        {id:user._id,isAdmin:user.isAdmin},
                        process.env.SECRET_TOKEN_KEY,
                        {expiresIn:"5d"}
                        )
                    const {password,...info}=user._doc
                    res.status(200).json({...info,accessToken})
                }
            }
        } catch(error){
            res.status(500).send(error)
        }
})

module.exports = router




