const db = require('../config/connection');
const { User, Goals } = require('../models');
const userSeeds = require('./userSeeds.json');
const goals = require('./goals.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
db.once('open', async () => {
  try {
    await Goals.deleteMany({});
    await Goals.create(goals);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
