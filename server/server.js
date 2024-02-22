import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Import DB
import dbConnect from './config/mongoose.config.js';
import router from './routes/routine.routes.js';

const app = express();


// == MiddleWare ==
app.use(express.json(), cors());
app.use("/api", router);


dotenv.config();
const PORT = process.env.PORT;


const DB_NAME = "Routine"
dbConnect(DB_NAME);


app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);