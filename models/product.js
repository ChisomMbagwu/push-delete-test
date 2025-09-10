const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaType.ObjectId,
        ref: 'users',
        del
    },
    productName: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    unitPrice: {
        type: Number,
        require: true,
        trim: true,
    },
    quantity: {
        type: Number,
        require: true
    },
       totalPrice: {
             type: Number,
        require: true,
        trim: true,
    },
    isAvailable: {
        type: Boolean,
         require: true
    }
}, {
    timestamp: true
});