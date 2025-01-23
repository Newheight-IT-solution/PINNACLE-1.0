import mongoose from "mongoose";

const propertiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"]
    },
    price: {
        type: Number,
        required: [true, "Please add a price"]
    },
    location: {
        type: String,
        required: [true, "Please add a location"]
    },
    status: {
        type: String,
        required: ["available", "sold"],
        
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Properties = mongoose.model("Properties", propertiesSchema);

export default Properties;