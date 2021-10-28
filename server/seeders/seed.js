const db = require('../config/connection');
const { User, Goal } = require('../models');
const userSeeds = require('./userSeeds.json');
const goal = require('./goal.json');




db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Goal.deleteMany({});
    await Goal.create(goal);
    console.log('CONFIRMED SEED!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

