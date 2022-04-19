import mongoose from "mongoose";
import 'dotenv/config';

const CONN_URI=process.env.CONN_URI
const db = mongoose.connect(CONN_URI, {
    useNewUrlParser: true,
}).then((response) => {
    console.log('Connected to the database...');
    return response;
});

export default db;