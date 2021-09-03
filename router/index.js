const express = require("express");
const { getAllUser } = require("../controller/get_UserById");
const { getUser } = require("../controller/getAllUser");

const { postUser } = require("../controller/user.controller");
const router = express.Router();
const questionRouter = require("./question.router")

router.use('/question',questionRouter)
// router.use('/signin',loginRouter)
router.use("/user",postUser)
router.use("/getById",getAllUser)
router.use("/getAlluser",getUser)



module.exports=router  