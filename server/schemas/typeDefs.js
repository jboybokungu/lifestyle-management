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
  type Goal {
    _id: ID
    title: String
    category: String
    calories: Int
    ounces: Int
    currentWeight: Int
    goalWeight: Int
    exercise: String
    duration: Int
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    getGoal: [Goal]
    addGoal: [Goal]
    allFitnessGoals: [Goal]
    fitnessGoal(fitnessId: ID!): Goal
    allFoodGoals: [Goal]
    foodGoal(foodId: ID!): Goal
    allSleepGoals: [Goal]
    sleepGoal(sleepId: ID!): Goal

  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addFitnessGoal(currentWeight:Int, goalWeight: Int, exercise:    String, duration:String): Goal
    addFoodGoal(name: String, calories:Int, ounces: Int): Goal
    addSleepGoal(hours: Int): Goal
    goal(title: String,category: String, calories: Int, ounces: Int,currentWeight: Int, goalWeight: Int, exercise: String, duration: Int): Goal

  }
`;

module.exports = typeDefs;
