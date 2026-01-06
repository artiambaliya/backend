const user = require("../models/model");


const handleAllGet = async (req, res) => {
    try {
        const getData = await user.find({})
        return res.json(getData)
    } catch (err) {
        return res.json(err, "err");
    }
}

const handleAllPost = async (req, res) => {
    const users = new user({
        notes: req.body.notes
    });

    try {
        const postData = await users.save()
        return res.json(postData)
    } catch (err) {
        return res.json(err)
    }
}

const handleGetById = async (req, res) => {
    try {
        const getId = await user.findById(req.params.id)
        return res.json(getId);
    } catch (err) {
        return res.json(err, "err");
    }
}


const handlePatchById = async (req, res) => {
    try{
        const result = await user.findByIdAndUpdate(req.params.id, {
           $set : {notes : req.body.notes} 
        });
        return res.josn(result);
    }catch(err){
        return res.json(err)
    }
}


const handleDeleteById = async (req, res) => {
    try{
        const deleteReq = await user.findByIdAndDelete(req.params.id)
        return res.json(deleteReq) 
    }catch(err){
        return res.json(err)
    }
}


module.exports = {
    handleAllGet,
    handleAllPost,
    handleGetById,
    handlePatchById,
    handleDeleteById
}