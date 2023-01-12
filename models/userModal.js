const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        trim: true,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minLength: [6, "Password must be greater then 6 digits"],
        maxLength: [23, "Password must be less then 23 digits"]
    },
    photo: {
        type: String,
        required: [true, "Please enter a password"],
        default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
    },
    phone: {
        type: String,
        default: "00000"
    },
    bio: {
        type: String,
        maxLength: [250, "Bio must be less then 250 words"],
        default: "Hi, I am using this website."
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
})

const userModal = mongoose.model('users', userSchema)

module.exports = userModal