import UserModel from "../model/userModel.js";

export const allUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    }
    catch (error) {
        res.json({ message: "No user found" });
    }
};
export const userDetails = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.json({ message: error });
    }
};
export const createUser = async (req, res) => {

    const { userName, email, password } = req.body;

    const userModel = new UserModel({
        userName: userName,
        email: email,
        password: password
    });
    try {
        const savedUser = await userModel.save();
        res.send({savedUser, message:"user created successfully", statusCode:200});
    }
    catch (error) {
        res.json( error);
    }

};


// export const userLogin = async (req, res) => {
//     try {

//         const user = await UserModel.find({ $and: [{ email: req.body.email }, { password: req.body.password }] });
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
