const { Schema, model } = require('mongoose');

const foodSchema = new Schema({
    calories: {
        type: Number,
        required: true,
    },
    ounses: {
        type: Number,
        required: true,
    }
});

const Food = model('Food', foodSchema);

module.exports = Food;