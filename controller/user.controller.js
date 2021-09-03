const userService = require("../services/user.service")
const Joi = require("joi")
const postUser = async(req,res)=>{
    const userSchema = Joi.object({
        Name: Joi.string().min(3).max(20).required(),

    })

    let schemaValidator = userSchema.validate(req.body);
    let payload;
    if (schemaValidator.error) {
        return res.status(400).json({
            message: "Invalid payload",
            error: schemaValidator.error.message,
            status: 400
        })
    } else {
        payload = schemaValidator.value
    }
    try {
        const result =await userService.post(payload)
        console.log(result);
        return res.status(200).json({
            message:"user created seccussfully",
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
    postUser
}