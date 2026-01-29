const user = require("../models/model");


const handleAllGet = async (req, res, next) => {
    try {
        const getData = await user.find({})

        return res.status(200).json(getData);

    } catch (err) {
        next(err);
    }
}

const handleAllPost = async (req, res, next) => {
    const users = new user({
        notes: req.body.notes
    });
    
    if(!req.body.notes){
        return res.status(400).json({message : "notes is required"});
    }
    
    try {
        const postData = await users.save()
        return res.status(200).json(postData)

    } catch (err) {
        next(err)
    }
}

const handleGetById = async (req, res, next) => {
    try {
        const getId = await user.findById(req.params.id)

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

        if(!result){
            const error = new Error("new error");
            error.status = 400;
            return next(error);
        }

        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}



const handleDeleteById = async (req, res, next) => {
    try {
        const deleteReq = await user.findByIdAndDelete(req.params.id)
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