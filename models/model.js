const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true,
    }
});

const user = mongoose.model("users", newSchema);

module.exports = user;