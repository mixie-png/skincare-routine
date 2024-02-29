import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Import DB
import dbConnect from './config/mongoose.config.js';
import routineRouter from './routes/routine.routes.js';
import productRouter from './routes/product.routes.js';

const app = express();


// == MiddleWare ==
app.use(express.json(), cors());
app.use("/api", routineRouter);
app.use("/api", productRouter);


dotenv.config();
const PORT = process.env.PORT;


const DB_NAME = "Routine"
dbConnect(DB_NAME);


app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);