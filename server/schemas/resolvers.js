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
    goals: async () => {
      return Goal.find().sort({ createdAt: -1});
    },
    goal: async (_, args) => {
      return Goal.findOne({_id: goalId});
    },
  },

  Mutation: {
    addGoal: async (parent, { goalText, goalAuthor}) => {
      return Goal.create({ goalText, goalAuthor});
    },

    updateGoal: async (parent, { goalId, goalText}) => {
      return Goal.findOneAndUpdate (
        {_id: goalId},
        {
          $addToSet : { goals: {goalText} },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    
    removeGoal: async (parent, { goalId} ) => {
      return Goal.findOneAndDelete({_id: goalId });
    },
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