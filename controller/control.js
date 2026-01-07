const user = require("../models/model");


const handleAllGet = async (req, res) => {
    try {
        const getData = await user.find({})
        return res.status(200).json(getData)
    } catch (err) {
        return res.status(500).json({ msg: "server error" });
    }
}

const handleAllPost = async (req, res) => {
    const users = new user({
        notes: req.body.notes
    });

    try {
        const postData = await users.save()
        return res.status(201).json(postData)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const handleGetById = async (req, res) => {
    try {
        const getId = await user.findById(req.params.id)

        if (!getId) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json(getId);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


const handlePatchById = async (req, res) => {
    try {
        const result = await user.findByIdAndUpdate(
            req.params.id,
            { $set: { notes: req.body.notes } },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({ message: "not found" });
        }
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


const handleDeleteById = async (req, res) => {
    try {
        const deleteReq = await user.findByIdAndDelete(req.params.id)

        if (!deleteReq) {
            return res.status(404).json({ message: "not founded" });
        }
        return res.status(200).json(deleteReq)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


module.exports = {
    handleAllGet,
    handleAllPost,
    handleGetById,
    handlePatchById,
    handleDeleteById
}