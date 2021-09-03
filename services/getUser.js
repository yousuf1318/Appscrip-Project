const userCollection = require("../models/user.model")

// const get = (condition)=>userCollection.findById(condition)


// module.exports={
//     get
// }

const post = userBody => UserCollection.create(userBody);
const findOne = condition => userCollection.findOne(condition)
const get = (condition, project={}, page={}, sort={}) => userCollection
  .find(condition, project)
  .sort(sort || {})
  .skip(page.skip || 0)
  .limit(page.limit || 10);


module.exports = {
    post,
    get,
    findOne
  }
