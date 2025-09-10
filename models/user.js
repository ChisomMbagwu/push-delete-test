const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        require: true,
        trim: true,
    },
       email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    location: {
        type: String,
        require: true,
        trim: true,
    }
}, {
    timestamp: true
});