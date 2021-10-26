const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const goalsSchema = new Schema({
    // start: {
    //     type: Date,
    //     default: Date.prototype.setDate,
    //     required: true,
    // },
    // end: {
    //     type: Date,
    //     required: true
    // },
    exercise: {
        type: String
    }

 
});

const Goals = model('Goals', goalsSchema);

module.exports = Goals;
