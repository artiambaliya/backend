const express = require("express");

const {
    handleAllGet,
    handleAllPost,
    handleGetById,
    handlePatchById,
    handleDeleteById
} = require("../controller/control");

const route = express.Router();


route.get("/", handleAllGet);

route.post("/", handleAllPost);

route.get("/:id", handleGetById);

route.patch("/:id", handlePatchById);

route.delete("/:id", handleDeleteById);



module.exports = route