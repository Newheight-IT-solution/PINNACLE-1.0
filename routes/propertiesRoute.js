import express from 'express';
import Properties from '../models/propertiesModel.js';
const router = express.Router();

router.post("/property", async(req, res) => {
    try {
        const {name, description, status, location, price} = req.body;

        const newProperty = await new Properties({
            name,
            description,
            status,
            location,
            price            
        })

        const saveProperty = await newProperty.save()

        if(saveProperty){
            res.json({data: saveProperty, message: "Property added successfully", status: "success"})

        }else{
            res.status(400).json({data: null,message: "Property not added", status: "failed"})

        }

    }   catch(error){
        res.status(500).json({status: "failed", message: error})
    }

})

router.get("/", async(req, res) => {})



export default router;