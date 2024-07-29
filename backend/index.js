import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/database.js';
import userRoute from './routes/userRoutes.js'
import companyRoutes from './routes/companyRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
dotenv.config({});

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api
app.use("/api/user",userRoute);
app.use("/api/company",companyRoutes);
app.use("/api/jobs",jobRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server started at port ${PORT}`);
})