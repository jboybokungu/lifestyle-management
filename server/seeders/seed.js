const db = require('../config/connection');
const { User, Fitness, Food, Sleep } = require('../models');
const userSeeds = require('./userSeeds.json');
const fitness = require('./fitnessSeeds.json');
const food = require('./foodSeeds.json');
const sleep = require('./sleepSeeds.json');



db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Fitness.deleteMany({});
    await Fitness.create(fitness);
    await Food.deleteMany({});
    await Food.create(food);
    await Sleep.deleteMany({});
    await Sleep.create(sleep);
    console.log('CONFIRMED SEED!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

