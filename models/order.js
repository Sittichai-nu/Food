const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    item: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    
    done: {
        type: String,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = Order = mongoose.model('order', OrderSchema);