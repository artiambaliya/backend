const express = require("express");
const mongoose = require("mongoose");
const allRoutes = require("./routes/route");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")


const app = express()
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("connected !"));

app.use("/", allRoutes)
app.use(errorHandler)

app.listen(8000, () => console.log("server is running"));
