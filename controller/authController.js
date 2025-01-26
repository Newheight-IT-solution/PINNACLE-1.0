import Admin from '../models/adminModel.js'
import bcrypt from 'bcryptjs'
import express from 'express'
import jwt from 'jsonwebtoken'




export const signup = async (req, res, next) => {
    const { full_name, admin_id, email, password } = req.body;

    const VALID_ADMIN_ID = 'PR-ADMIN-2025'
    const VALID_FULL_NAME = 'Pinnacle Rentals'
    const VALID_EMAIL = 'pinnaclerentals@gmail.com'
    const VALID_PASSWORD = 'Pinnacle2025'

    if(admin_id !== VALID_ADMIN_ID){
        return res.status(400).json({message: 'Invalid Admin Id'})
        
    }

    if(full_name !== VALID_FULL_NAME){
        return res.status(400).json({message: 'Invalid Full Name'})
    }

    if(email !== VALID_EMAIL){
        return res.status(400).json({message: 'Invalid Email'})
    }

    if(password !== VALID_PASSWORD){
        return res.status(400).json({message: 'Invalid Password'})
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newAdmin = new Admin({
        full_name,
        admin_id,    
        email,
        password: hashedPassword,
        
    })

    try{
        await newAdmin.save()
    res.status(201).json( "Admin created successfully")

    }catch(error){
        next(error)
    }

}

export const signin = async (req, res, next) => {
    const { admin_id, password } = req.body;
    try {
        const validAdmin = await Admin.findOne({ admin_id });
        if (!validAdmin) 
            return next(errorHandler(400, "Wrong Credentials"));
        const validPassword = bcrypt.compareSync(password, validAdmin.password);
        if (!validPassword) 
            return next(errorHandler(400, "Wrong Credentials"));
        const token = jwt.sign({ id: validAdmin._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validAdmin._doc;
        res
        .cookie('access_token', token, { httpOnly: true})
        .status(200)
        .json({ rest });

        
    } catch (error) {
        next(error)
        
    }}

    const admin = await Admin