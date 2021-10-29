import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_GOAL = gql`
  mutation addGoal(
      $title: String!,
      $category: String!, 
      $currentWeight: Int,
      $goalWeight: Int, 
      $exercise: String,
      $duration: Int,
    ) {
    addGoal(
      title: $title,
      category: $category
      currentWeight: $currentWeight,
      goalWeight: $goalWeight,
      exercise: $exercise,
      duration: $duration,

    ) {
      _id
      title
    }
  }
`;

