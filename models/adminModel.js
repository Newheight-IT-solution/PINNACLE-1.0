import express from "express";
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    contact_no: {
        type: Number,
        required: true,
        unique: true
    },
    full_name: {
        type: String,
        required: true
    },
    admin_id: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;   // This is the model that will be used in the controller to perform CRUD operations on the database.