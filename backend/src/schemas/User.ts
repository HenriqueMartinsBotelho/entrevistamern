import mongoose from "mongoose";
import bcrypt from "bcrypt";

 const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    mobile: {
        type: String,
        required: false,
        unique: false,
    },
    phone: {
        type: String,
        required: false,
        unique: false,      
    },
    password: {
        type: String,
        required: true,
        // select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
 })

 User.pre('save', async function(next){
    const passwordHash = await bcrypt.hash(this.password, 12)
    this.password = passwordHash;
    next()
 })

 export default mongoose.model("User", User)