const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    title: {
        type: String,
        reqired: true
    },
    option:{
        type: Object,
        required: true
    },
    answer:{
        type:String
    }
   
});

module.exports = mongoose.model('question', userSchema)