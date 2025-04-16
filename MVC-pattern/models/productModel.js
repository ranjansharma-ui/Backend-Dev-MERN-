const {Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type :String,
        required: true,
        maxlength: 50
    },
    price: {
        type : Number,
        required: true
    },
    description: {
        type :String,
        required: true
    },

    createAt : {
        type: Date,
        default : Date.now,
    },
});

const ProductModel = model("product", ProductSchema)

module.exports = ProductModel;