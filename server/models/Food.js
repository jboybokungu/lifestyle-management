const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    name: {
        type: String,
    },
    calories: {
        type: Number,
        required: true,
    },
    ounces: {
        type: Number,
        required: true,
    }
});

const Food = model('Food', foodSchema);

module.exports = Food;