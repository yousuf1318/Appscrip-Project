const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        reqired: true
    },
   
});

module.exports = mongoose.model('users', userSchema)