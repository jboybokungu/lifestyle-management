const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  
});

const Profile = model('Goal', profileSchema);

module.exports = Profile;