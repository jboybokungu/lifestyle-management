const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Fitness, Food, Sleep,} = require('../models');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    allFitnessGoals: async (_, args) => {
      return Fitness.find().sort({ createdAt: -1});
    },

    fitnessGoal: async (_, {fitnessId}) => {

      return Fitness.findOne({_id: fitnessId});
    },

    allFoodGoals: async (_, args) => {
      return Food.find().sort({ createdAt: -1});
    },

    foodGoal: async (_, {foodId}) => {

      return Food.findOne({_id: foodId});
    },

    allSleepGoals: async (_, args) => {
      return Sleep.find().sort({ createdAt: -1});
    },

    foodGoal: async (_,{sleepId}) => {

      return Sleep.findOne({_id: sleepId});
    },

  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;