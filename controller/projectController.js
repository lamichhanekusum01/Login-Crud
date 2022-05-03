import ProjectModel from "../model/projectModel.js";
import axios from "axios";


export const projectAll = async (req, res) => {
  try {
    

    const projects = await ProjectModel.find();
    res.json(projects);
  } catch (error) {
    res.json({ message: "No user found" });
  }
};
export const projectCreate=(req,res)=>{
    axios.get("https://api.github.com/users/lamichhanekusum01/repos?per_page=6").then((res)=>{
        const { data } = res;
        console.log("yeha");
        data.forEach((obj) => {
        new ProjectModel({
        projectTitle: obj.name,
        projectDate: obj.pushed_at,
        projectLink: obj.html_url,
      }).save();
    });
  })

  .catch((error) => console.log(error));
};
