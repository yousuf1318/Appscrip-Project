const questionCollection = require("../models/question.model")

const get = (condition)=>questionCollection.find(condition)
const findOne = (condition)=>questionCollection.find(condition)
const post = (condition,payload)=>questionCollection.create(condition,payload)
module.exports={
    get,
    post,
    findOne
}