const userService = require("../services/getUser")
const Joi = require("joi")
const getAllUser = async(req,res)=>{
    
    let id = req.body.id || {}
    let payload = { _id : id}


    try {
        const result =await userService.findOne({payload})
        console.log(result);
        return res.status(200).json({
            message:"data get seccussfully",
            data:result,
            status:200
        })
    } catch (error) {   
        return res.status(500).json({
            message: "Internal server error!",
            status: 500
        })
    }
}

module.exports={
    getAllUser
}