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
        enum: ["available", "sold", "pending", "rented"],  // Allowed statuses
        default: "available"
    },
    environmentImages: {
        type: [String],  // Array of strings for environment images
        default: []      // Default to an empty array
    },
    sittingRoomImages: {
        type: [String],  // Array of strings for sitting room images
        default: []      // Default to an empty array
    },
    bedroomImages: {
        type: [String],  // Array of strings for bedroom images
        default: []      // Default to an empty array
    },
    kitchenImages: {
        type: [String],  // Array of strings for kitchen images
        default: []      // Default to an empty array
    },
    features: {
        type: [String],  // Array of strings for bullet points
        default: []      // Default to an empty array
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Properties = mongoose.model("Properties", propertiesSchema);

export default Properties;