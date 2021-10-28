import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_FITNESS = gql`
  query allFitnessGoals {
    allFitnessGoals {
      exercise
      duration 
      currentWeight
      goalWeight 
  }
  }
`;

export const QUERY_SINGLE_FITNESS = gql`
  query fitnessGoal ($fitnesstId: ID!){
    fitnessGoal {
      _id
      exercise
      duration 
      currentWeight
      goalWeight 
    }
  }
`;



export const QUERY_FOODS = gql`
  query allFoodGoals {
    allFoodGoals {
      name
      calories
      ounces
    }
  }
`;


//query a single food/drink goal
export const QUERY_SINGLE_FOOD = gql`
  query foodGoal($foodId: ID!) {
    foodGoal {
      _id
      name
      calories
      ounces
    }
  }
`;

//query all sleep goals in its respective card
export const QUERY_SLEEP = gql`
  query allSleepGoals {
    allSleepGoals {
      _id
      hours
    }  
  }
`;
export const QUERY_SINGLE_SLEEP = gql`
  query sleepGoals {
    sleepGoals {
      _id
      hours
    }  
  }
`;








