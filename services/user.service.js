const userCollection = require("../models/user.model")

const post = (condition)=>userCollection.create(condition)


module.exports={
    post
}