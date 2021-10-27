const { Schema, model } = require('mongoose');

const sleepSchema = new Schema({
  hours: {
    type: Number,
    required: true,

  }
});

const Sleep = model('Sleep', sleepSchema);

module.exports = Sleep;