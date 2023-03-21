const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"] 
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be 1$ or more"] 
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters long"] 
    },
    onSale: {
        type: String,
        required: [true, "On Sale is required"]
    }
},

    { timestamps: true }
);


module.exports = mongoose.model("Product", ProductSchema);