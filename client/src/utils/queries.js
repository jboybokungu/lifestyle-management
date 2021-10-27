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

//query fitness goals. This will be used for Cards.js
export const QUERY_GOALS = gql`
  query goals {

      
    
    }
  }
`;

//query all fitness goal. This will be used inside each respecitive card
export const QUERY_FITNESS = gql`
  query allFitnessGoals {
    workouts {
      _id
      exercise
      duration 
    },
    weightGoals {
    _id
    currentWeight
    goalWeight
    
    }
  }
`;

//query a single fitness goal
export const QUERY_SINGLE_FITNESS = gql`
  query fitnessGoal ($workoutId: ID!){
    workout(workoutid: $id) {
      _id
      name
      duration 
    },
    weightGoal {
    _id
    currentWeight
    goalWeight
    
    }
  }
`;


//query all food and drink goals in its respective card
export const QUERY_FOODS = gql`
  query allFoodGoals {
    food {
    _id
    calories
    }
    water {
    _id
    ounses
    }
  
  }
`;


//query a single food/drink goal
export const QUERY_FOOD = gql`
  query foodGoal($foodId: ID!) {
    food {
    _id
    calories
    }
    water {
    _id
    ounses
    }
  
  }
`;

//query all sleep goals in its respective card
export const QUERY_SLEEP = gql`
  query allSleepGoals {
  sleep {
  _id
  hours
  }
  
  }
`;

//query a single sleep goal
//CODE HERE

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;


