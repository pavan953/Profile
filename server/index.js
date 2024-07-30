import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.routes.js'  
dotenv.config(); 

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
    })
const app=express();

app.listen(3000,()=>{
    console.log('Port is running on 3000 ')
});

app.use('/api/user',UserRoutes)