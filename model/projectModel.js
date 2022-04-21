import mongoose from "mongoose";
const ProjectModel= mongoose.model('Project', 
    mongoose.Schema(
        {
            projectTitle: {
                type: String,
                
              
                
              
            },
           
            projectDate: {
                type: Date,
                required: true,
            },
      
        projectLink: {
            type: String,
        },
 
        }
    )
);
export default ProjectModel;

