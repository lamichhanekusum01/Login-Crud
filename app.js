import express from 'express';
import conn from './db/conn.js';
import useRouter from './routes/user.js';
import  contactRouter from './routes/contact.js'
import  projectRouter from './routes/project.js'
import cors from 'cors'
const app = express();
app.use(cors({
    origin:"http://localhost:3000",
}))
conn;

app.use(express.json());
app.use("/user",useRouter);
app.use("/contact", contactRouter);
app.use("/project", projectRouter);

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
