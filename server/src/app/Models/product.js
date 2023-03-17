import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const productSchema = new Schema({
    id: ObjectId,
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    priceNew: {
        type: String,
        require: true
    },
    priceOld: {
        type: String,
        require: true
    },
}, {timestamps: true})

export const productModel = mongoose.model('products', productSchema)