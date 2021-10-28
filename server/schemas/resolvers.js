const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Goal} = require('../models');


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
      return Goal.find({ category: 'fitness' });
    },
    allFoodGoals: async (_, args) => {
      return Goal.find({ category: 'food' });
    },
    allSleepGoals: async (_, args) => {
      return Goal.find({ category: 'sleep' });
    },
    getGoal: async (_, {id}) => {
      return Goal.findOne({_id: id});
    },
    addGoal: async (_, args) => {
      return Goal.create(args);
    }
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
    },
    goal: async (_, args) => {
      const goal = await Goal.create(args);
      return goal;
    },
    addFitnessGoal: async (_, args) => {
      const newFitnessGoal = await Goal.create(args);
      return newFitnessGoal;
    },
    addFoodGoal: async (_, args) => {
      const newFoodGoal = await Goal.create(args);
      return newFoodGoal;
    },
    addSleepGoal: async (_, args) => {
      const newSleepGoal = await Goal.create(args);
      return newSleepGoal;
    },
    
  }
};

module.exports = resolvers;