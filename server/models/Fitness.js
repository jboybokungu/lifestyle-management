const { Schema, model } = require('mongoose');

const fitnessSchema = new Schema({
    currentWeight:{
        type: Number,
        required: true,
        decimal: Schema.Types.Decimal128,
    },
    goalWeight: {
        type: Number,
        required: true,
        decimal: Schema.Types.Decimal128,
    },
    exercise: {
        type: String,
        minlength: 10,
        trim: true,
    },
    duration: {
        type: Number,
    }
});

const Fitness = model('Fitness', fitnessSchema);

module.exports = Fitness;