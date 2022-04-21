import contactModel from "../model/contactModel.js";
import { main } from "../utils/sendMail.js";


export const contactAll = async (req, res) => {
  try {
    const contacts = await contactModel.find();
    res.json(contacts);
  } catch (error) {
    res.json({ message: "No user found" });
  }
};

export const contactDetails = async (req, res) => {
  try {
    const user = await contactModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

export const createContact = async (req, res) => {
  let { fullname, email, message } = req.body;
  const ContactModel = new contactModel({
    fullname: fullname,
    email: email,
    message:message,
  });
  
  try {
    const savedContact = await ContactModel.save();

    main(email,fullname);
    res.send({
      savedContact,
      message: "Contact Updated Sucessfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json(error);
  }
};
export const contactUpdate = async (req, res) => {
  try {
    
    const updateContact = await contactModel.findByIdAndUpdate(
      req.params.id,
      {
        fullname: req.body.fullname,
        email: req.body.email,
        message:req.body.message,
      },
      { new: true }
      
    );
   
    res.send(updateContact);
  } catch (error) {
    res.json({ message: error });
  }
};

export const contactDelete = async (req, res) => {
  try {
    const _id = req.params.id;
    const removeContact = await contactModel.findByIdAndDelete(_id);
    res.send("contact deleted");
  } catch (error) {
    res.json({ message: "couldn't delete contact" });
  }
};




// export const userLogin = async (req, res) => {
//     try {

//         const user = await contactModel.find({ $and: [{ email: req.body.email }, { password: req.body.password }] });
//         if (user) {
//             res.send("successfull login");
//         }
//         else {
//             throw new error("error");
//         }
//         // res.json(user);
//     }
//     catch (error) {
//         res.json({ message: error });
//     }
// }
