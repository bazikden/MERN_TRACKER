const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please enter som text']
    },
    amount:{
        type:Number,
        required: [true, 'Please enter the positive or negative value']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Transaction',TransactionSchema)