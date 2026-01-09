const user = require("../models/model");


const handleAllGet = async (req, res, next) => {
    try {
        const getData = await user.find({})
        return res.status(200).json(getData)
    } catch (err) {
        next(err)
    }
}

const handleAllPost = async (req, res, next) => {
    const users = new user({
        notes: req.body.notes
    });

    try {
        const postData = await users.save()
        return res.status(201).json(postData)
    } catch (err) {
        next(err)
    }
}

const handleGetById = async (req, res, next) => {
    try {
        const getId = await user.findById(req.params.id)

        if (!getId) {
            const err = new Error("user not found");
            err.status = 400;
            throw err;
        }
        return res.status(200).json(getId);
    } catch (err) {
        next(err);
    }
}


const handlePatchById = async (req, res, next) => {
    try {
        const result = await user.findByIdAndUpdate(
            req.params.id,
            { $set: { notes: req.body.notes } },
            { new: true }
        );

        if (!result) {
           const err = new Error("user not founded");
           err.status = 404;
           throw err;
        }
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}


const handleDeleteById = async (req, res, next) => {
    try {
        const deleteReq = await user.findByIdAndDelete(req.params.id)

        if (!deleteReq) {
            const err = new Error("user not founded");
            err.status = 404;
            throw err;
        }
        return res.status(200).json(deleteReq)
    } catch (err) {
        next(err);    
    }
}


module.exports = {
    handleAllGet,
    handleAllPost,
    handleGetById,
    handlePatchById,
    handleDeleteById
}