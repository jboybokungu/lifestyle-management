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
export const ADD_FITNESS_GOAL = gql`
  mutation addFitnessGoal($currentWeight: String, $goalWeight: Int, $exercise: String, $duration: String) {
    addFitnessGoal(currentWeight: $currentWeight, goalWeight: $goalWeight, exercise: $exercise) {
      fitnessGoal {
        _id
        currentWeight
        goalWeight
        exercise
        duration
      }
    }
  }
`;
export const ADD_FOOD_GOAL = gql`
  mutation addFoodGoal($name: String, $calories: Int, $ounces: Int) {
    addFitnessGoal(name: $name, calories: $calories, ounces: $ounces) {
      foodGoal {
        _id
       name
       calories
       ounces
      }
    }
  }
`;
export const ADD_SLEEP_GOAL = gql`
  mutation addSleepGoal($hours: Int) {
    addSleepGoal(hours: $hours) {
      sleepGoal {
        _id
      hours
      }
    }
  }
`;

