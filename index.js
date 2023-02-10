const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const todoRouter = require("./routes/todo");
const connectDB = require("./database/connection");
require("dotenv").config()

const app = express();
app.use(express.json());
app.use("/todos", todoRouter);


// connects to database and then start the server
connectDB().then(() => {
    app.listen(process.env.PORT || 8088, () => {
        console.log("server listening for requests");
    })
})




