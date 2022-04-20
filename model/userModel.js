import mongoose from "mongoose";
const UserModel= mongoose.model('Login', 
    mongoose.Schema(
        {
            userName: {
                type: String,
                required: true,
                trim:true
            },
            email: {
                type: String,
                required: true,
                trim: true,
                unique:true 
            },
            
            password: {
                type: String,
                required: true,
                trim:true
            }
        },
        {timestamps: true}
    )
);
export default UserModel;