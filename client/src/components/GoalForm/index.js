import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_GOAL } from '../../utils/mutations';

const GoalForm = (props) => {
  const [formState, setFormState] = useState({
    title: '',
    category: "TestCategory",
    currentWeight: null,
    goalWeight: null,
    exercise: null,
    duration: null,
    calory: null,
    sleepDuration: null
  });

  // Set up our mutation with an option to handle errors
  const [addGoal, { error }] = useMutation(ADD_GOAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addGoal({
        variables: { 
          ...formState
         },
      });

      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(form => ({ ...form, [name]: value }));
  };

  const buildForm = () => {
    switch (props.type) {
      case 'fitness': {
        return (
          <>
            <div className="col-12">
              <input
                name="currentWeight"
                type="number"
                placeholder="Enter your current Weight"
                value={formState.currentWeight}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <input
                name="goalWeight"
                type="number"
                placeholder="Enter your goal weight"
                value={formState.goalWeight}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <input
                name="exercise"
                type="text"
                placeholder="Enter your exercises?"
                value={formState.exercise}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <input
                name="workoutDuration"
                type="number"
                placeholder="How long will it take you to reach your goal?"
                value={formState.duration}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
          </>
        );
      }
      case 'food': {
        return (

          <div className="col-12">
            <input
              name="duration"
              type="number"
              placeholder="How many calories does your food have?"
              value={formState.calory}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
        );
      }
      case 'sleep': {
        return (

          <div className="col-12">
            <input
              name="sleepDuration"
              type="number"
              placeholder="How long do you want to sleep?"
              value={formState.sleepDuration}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
        );
      }
      default:
    }
  }

  return (
    <div>
      <h3>What's on your techy mind?</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <input
            name="title"
            placeholder="Here's a new goal..."
            value={formState.title}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        {buildForm()}
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Goal
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default GoalForm;
