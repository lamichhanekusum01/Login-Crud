import mongoose from "mongoose";
import 'dotenv/config';
const CONNECT_URI=process.env.CONNECT_URI
const db = mongoose.connect(CONNECT_URI, {
    useNewUrlParser: true,
}).then((response) => {
    console.log('Connected to the database...');
    return response;
});

export default db;