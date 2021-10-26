const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const goalsSchema = new Schema({
 
});

const Goals = model('Goals', goalSchema);

module.exports = Goals;
