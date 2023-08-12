const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
    tittle: {
        type: String,
        trim:true,
        require: true,
        unique: true,
    },
    comments: {
        type: String,
        trim:true,        
    },
    image: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    }
})

const userModel = mongoose.model("Media", mediaSchema)

module.exports = userModel