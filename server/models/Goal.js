const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const goalSchema = new Schema({
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

const Goal = model('Goal', goalSchema);

module.exports = Goal;
