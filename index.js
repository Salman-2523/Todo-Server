const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", true);
const todoRouter = require("./routes/todo");
const connectDB = require("./database/connection");
require("dotenv").config()
const app = express();


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(cors(corsOptions));

app.use(express.json());
app.get('/',(_,res)=> res.send('Hello From Server!'))
app.use("/todos", todoRouter);


// connects to database and then start the server
connectDB().then(() => {
    app.listen(process.env.PORT || 8088, () => {
        console.log("server listening for requests");
    })
})




