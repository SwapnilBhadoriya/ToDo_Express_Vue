require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
const todoRouter = require('./routes/tasks');

app.use('/todos',todoRouter);

const port = 3000;
const {connectDb} = require('./config/dbconnect')
const start = async ()=>{
    try {
        await connectDb();

        app.listen(port,()=>{
            console.log('Server running on port :',port);
        })
    } catch (error) {
        console.log('Error in starting the server..');
    }
}

start();