const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", true);
const todoRouter = require("./routes/todo");
const connectDB = require("./database/connection");
require("dotenv").config()
const app = express();


const corsOption = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5173/'],
};
app.use(cors(corsOption));

app.use(express.json());
app.get('/',(_,res)=> res.send('Hello From Server!'))
app.use("/todos", todoRouter);


// connects to database and then start the server
connectDB().then(() => {
    app.listen(process.env.PORT || 8088, () => {
        console.log("server listening for requests");
    })
})




