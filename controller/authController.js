import Admin from '../models/adminModel.js'
import bcrypt from 'bcryptjs'


export const signup = async (req, res, next) => {
    const { full_name, admin_id, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newAdmin = new Admin({
        full_name,
        admin_id,
        email,
        password: hashedPassword
    })

    try{
        await newAdmin.save()
    res.status(201).json( "Admin created successfully")

    }catch(error){
        next(error)
    }
    
    

}