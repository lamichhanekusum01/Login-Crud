import mongoose from "mongoose";
const UserModel= mongoose.model('Login', 
    mongoose.Schema(
        {
            userName: {
                type: String,
                required: [true,"Please mention your username"],
                trim:true
            },
            email: {
                type: String,

                unique: true,
                required: [true, "Please add an email"],
                trim: true,
                match: [
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  "Please add a valid email",
                ], 
              
            },
            token: {
                type: String 
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