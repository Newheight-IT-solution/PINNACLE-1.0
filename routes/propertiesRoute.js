import express from 'express';
import Properties from '../models/propertiesModel.js';
import req from 'express/lib/request.js';


const router = express.Router();




// Create a new property
router.post("/property", async(req, res) => {
    try {
        const {name, description, status, location, price, environmentImages, sittingRoomImages, bedroomImages, kitchenImages, features} = req.body;

        const newProperty = await new Properties({
            name,
            description,
            status,
            location,
            price,
            environmentImages,
            sittingRoomImages,
            bedroomImages,
            kitchenImages,
            features        
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

// Get all properties

router.get("/properties", async (req, res) => {
    try {
        const properties = await Properties.find({});
        if (properties && properties.length > 0) {
            res.json({ data: properties, message: "Properties received", status: true });
        } else {
            res.status(400).json({ data: null, message: "No properties found", status: false });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error" });
    }
});

// Get a single property

router.get("/properties/:id", async(req, res) => {
    try {
        const propertyId = req.params.id
        const property = await Properties.findById(propertyId)

        if(property){ res.json({ data: property, message: "Properties received", status: true });

        }else{
            res.status(400).json({data: null, message: "post mot found", status: false })
        }
    } catch (error) {
         res.status(500).json({ status: false, message: "Internal server error"})
    }
})

// Update a property


router.put("/properties/:id", async(req, res) => {
    try {
        const propertyId = req.params.id
        const {name, description, status, location, price, environmentImages, bedroomImages, sittingRoomImages, kitchenImages, features} = req.body
        const property = await Properties.findById(propertyId)

        const updateProperty = await Properties.findByIdAndUpdate(propertyId, {
            name: name ? name : property.name,
            description: description ? description : property.description,
            status: status ? status : property.status,
            location: location ? location : property.location,  
            price: price ? price : property.price,
            environmentImages: environmentImages ? environmentImages : property.environmentImages,
            bedroomImages: bedroomImages ? bedroomImages : property.bedroomImages,
            sittingRoomImages: sittingRoomImages ? sittingRoomImages : property.sittingRoomImages,
            kitchenImages: kitchenImages ? kitchenImages : property.kitchenImages,
            features: features ? features : property.features
        }, {
            new: true,
            runValidators: true
        })

        if(updateProperty){
            res.json({ data: updateProperty, message: "Property updated successfully", status: true })
        }else{
            res.status(400).json({ data: null, message: "Property not updated", status: false })
        }
    
    
        } catch (error) {
            res.status(500).json({ status: false, message: "Internal server error"})
        }
})


// Delete a property


router.delete("/properties/:id", async(req, res) => {
    try {
        const propertyId = req.params.id
        const deletedProperty = await Properties.findByIdAndDelete(propertyId)

        if(deletedProperty){
            res.json({ data: null, message: "Property deleted successfully", status: true })
        }else{
            res.status(400).json({ data: null, message: "Property not deleted", status: false })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal server error"})
    }
})




export default router