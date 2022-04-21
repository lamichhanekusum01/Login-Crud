import ProjectModel from "../model/contactModel.js";


export const projectAll = async (req, res) => {
  try {
    const contacts = await contactModel.find();
    res.json(contacts);
  } catch (error) {
    res.json({ message: "No user found" });
  }
};
