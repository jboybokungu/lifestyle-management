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
      $title: String,
      $currentWeight: Float, 
      $goalWeight: Float, 
      $exercise: String,
      $duration: Int,
      $ounces: Number,
      $calories: Number
    ) {
    addFitnessGoal(
      title: $title,
      currentWeight: $currentWeight,
      goalWeight: $goalWeight,
      exercise: $exercise,
      duration: $duration,
      ounces: $ounces,
      calories: $calories
    ) {
      goal {
        _id
        title
        currentWeight
        goalWeight
        exercise
        duration
        calories
        ounces
      }
    }
  }
`;

