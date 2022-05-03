import mongoose from "mongoose";
const ProjectModel= mongoose.model('Project', 
    mongoose.Schema(
        {
            projectTitle: {
                type: String,
                required: [true, "Please add an tittle"],
                trim: true,
              
                
              
            },
           
            projectDate: {
                type: Date,
        required: [true, "Please add published date"],
        trim: true,
            },
      
        projectLink: {
            type: String,
            required: [true, "Please provide link to your github"],
            trim: true,
        },
 
        }
    )
);
export default ProjectModel;

