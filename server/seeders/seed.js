const db = require('../config/connection');
const { User, Goal } = require('../models');
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
    await Goal.deleteMany({});
    await Goal.create(goals);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
