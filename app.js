const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
connectDB();
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const userRouter = require('./routes/user.routes');

app.use('/user', userRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})