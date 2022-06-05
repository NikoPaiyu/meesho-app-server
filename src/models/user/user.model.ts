import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true
    },
    userEmail : {
        type: String,
        required : true
    },
    usePhoneNumber : {
        type: Number,
        required : true
    }
});

module.exports = mongoose.model('User',userSchema);