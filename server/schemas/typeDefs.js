const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Goal {
    _id: ID
    exercise: String
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
