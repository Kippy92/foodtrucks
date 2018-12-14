console.log("inside of models/foodtruck.js");

const mongoose = require("mongoose");
const ReviewSchema = require("./review.js")

const FoodtruckSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Food Truck must have a name"], 
        maxlength: 255
    },
    style: {
        type: String, 
        required: [true, "Food style is required"], 
        minlength: [2, "Style must be at least 2 characters"], maxlength: 255
    },
    description: {
        type: String, 
        required: [true, "You need to describe the foodtruck"], 
        minlength: [10, "Description must be at least 10 characters"]
    },
    reviews: [ReviewSchema],
    avgreview: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

mongoose.model('Foodtruck', FoodtruckSchema);
