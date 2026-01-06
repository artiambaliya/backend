const express = require("express");
const mongoose = require("mongoose");
const allRoutes = require("./routes/route")


const app = express()
app.use(express.json());

mongoose.connect("mongodb://admin:admin123@127.0.0.1:27017/notesApp?authSource=admin")
.then(() => console.log("connected !"))

app.use("/", allRoutes)

app.listen(8000, () => console.log("server is running"));
