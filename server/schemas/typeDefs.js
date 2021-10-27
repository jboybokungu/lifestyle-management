const { gql } = require('apollo-server-express');
// change users back to profile
// added name to goal
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Fitness {
    _id: ID
    currentWeight: Int
    goalWeight: Int
    exercise: String
    duration: String
  }
  type Food {
    _id: ID
    name: String
    calories: Int
    ounces: Int
  }
  
  type Sleep {
    _id: ID
    hours: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    allFitnessGoals: [Fitness]
    fitnessGoal(fitnessId: ID!): Fitness
    allFoodGoals: [Food]
    foodGoal(foodId: ID!): Food
    allSleepGoals: [Sleep]
    sleepGoal(sleepId: ID!): Food

  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }
`;

module.exports = typeDefs;
