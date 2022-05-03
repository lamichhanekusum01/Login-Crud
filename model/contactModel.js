import mongoose from "mongoose";
const contactModel= mongoose.model('contact', 
    mongoose.Schema(
        {
            fullname: {
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
            message: {
                type: String,
               
            }
        },
        {timestamps: true}
    )
);
export default contactModel;