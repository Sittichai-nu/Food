const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KitchenSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    },
    quantity:{
        type:String,
        required: true
    },
    done:{
        type:String,
        default: false
    },
    date:{
        type:Date,
        default: Date.now
    },
})

module.exports = Kitchen = mongoose.model('kitchen', KitchenSchema);