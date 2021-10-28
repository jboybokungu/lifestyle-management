const { Schema, model } = require('mongoose');

const goalSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
    },
    ounces: {
        type: Number,
    },
    currentWeight:{
        type: Number,
        decimal: Schema.Types.Decimal128,
    },
    goalWeight: {
        type: Number,
        decimal: Schema.Types.Decimal128,
    },
    exercise: {
        type: String,
        minlength: 10,
        trim: true,
    },
    duration: {
        type: Number, // minutes
    },
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;