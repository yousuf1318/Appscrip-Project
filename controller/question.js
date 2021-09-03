const questionService = require("../services/question.service")
const Joi = require("joi")
const addQuestion = async(req,res)=>{
    console.log(req.body);
    const questionSchema = Joi.object({
        title: Joi.string().min(3).required(),
        option:Joi.object().required(),
        answer:Joi.string().required()

    })

    let schemaValidator = questionSchema.validate(req.body);
    if (schemaValidator.error) {
        return res.status(400).json({
            message: "Invalid payload",
            error: schemaValidator.error.message,
            status: 400
        })
    } else {
        userPayload = schemaValidator.value
    }
    try {
        console.log(userPayload);
        const condition = {
            title: userPayload.title
        }
        const existingQusetion = await questionService.findOne(condition)
        console.log(existingQusetion);
        if (existingQusetion && existingQusetion.length !==0) {
            return res.status(409).json({
                message: "You ahve answer this question please go to next question",
                status: 409
            })
        } else {

            const payload = {
                ...userPayload,
                creationTs: Date.now()
            }
            const result = await questionService.post(payload)
            console.log(result);
            return res.status(200).json({
                message:"Your question is ",
                data:result,
                status:200
            })
        }

    } catch (error) {   
        console.log(error);
        return res.status(500).json({
            message: "Internal server error!",
            status: 500
        })
    }
}

const getQuestion = async(req,res)=>{

try {
    const result = await questionService.get()
    console.log(result);
    res.send(result)
} catch (error) {
    console.log(error);
}
    
}
module.exports={
    addQuestion,
    getQuestion
}