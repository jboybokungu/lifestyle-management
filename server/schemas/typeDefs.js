const { gql } = require('apollo-server-express');
// change users back to profile
// added name to goal
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profile: [Profile]
  }

  type User {
    _id: ID
    name:(userId: ID!)
  }
  type Goal {
    _id: ID
    name: String
    fitness: [Fitness]
    food: [Food]
    sleep: [Sleep]
  }
  type Fitness {
    _id: ID
    currentWeight: Int
    goalWeight: Int
    exercise: String
    duration: Int
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
    goals: [Goal]
    goal(id: ID!): Goal
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addGoal(exercise:String): Goal
    updateGoal(exercise:String): Goal
    removeGoal(exercise:String): Goal
  }
`;

module.exports = typeDefs;
