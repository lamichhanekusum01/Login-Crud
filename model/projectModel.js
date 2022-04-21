import mongoose from "mongoose";
const ProjectModel= mongoose.model('Project', 
    mongoose.Schema(
        {
            ProjectImage: {
                type: String,
                required: [true,"Please insert the image"],
                trim:true
            },
            ProjectTitle: {
                type: String,
                unique: true,
                required: [true, "Please add "],
                trim: true,
                match: [
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  "Please add a valid email",
                ], 
              
            },
           
            ProjectDate: {
                type: String,
                required: true,
                trim:true
            },
      
        ProjectLink: {
            type: String,
            required: true,
            trim:true
        },
 
        }
    )
);
export default ProjectModel

