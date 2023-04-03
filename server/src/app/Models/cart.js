import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const cartSchema = new Schema({
    id: ObjectId,
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    typePot: {
        type: String,
        require: true
    },
    qty: {
        type: Number
    },
    total: {
        type: Number,
        require: true
    }
}, {timestamps: true})

export const cartModel = mongoose.model('cart', cartSchema)