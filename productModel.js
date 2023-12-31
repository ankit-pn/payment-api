const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'Please provide userId']
    },
    sch: {
        type: String,
        required: [true, 'Please provide userId']
    },
    amount: {
        type: String,
        required: [true, 'Please provide userId']
    },
    time:{
        type: String,
        required: [true, 'Please provide time']
    }
  
})

module.exports = mongoose.model.Products || mongoose.model('Products',productSchema);