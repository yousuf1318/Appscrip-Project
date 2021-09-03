const express = require("express");
const questionController  = require("../controller/question");
const router = express.Router();


router.post("/",questionController.addQuestion)
router.get("/",questionController.getQuestion)
module.exports= router;