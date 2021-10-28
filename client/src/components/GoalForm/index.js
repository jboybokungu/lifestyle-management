import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_GOAL } from '../../utils/mutations';

const GoalForm = (props) => {
  const [formState, setFormState] = useState({
    title: '',
    calories: null,
    ounces: null,
    currentWeight: null,
    goalWeight: null,
    exercise: null,
    duration: null
  });

  // Set up our mutation with an option to handle errors
  const [addGoal, { error }] = useMutation(ADD_GOAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addGoal({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(form => ({ ...form, [name]: value }));
  };

  const buildForm = () => {
    switch(props.type) {
      case 'sleep': {
        return (
          <>
          <div className="col-12">
            <input
              name="duration"
              type="number"
              placeholder="What's your sleep goal"
              value={formState.duration}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <input
              name="duration"
              type="number"
              placeholder="What's your sleep goal"
              value={formState.duration}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <input
              name="duration"
              type="number"
              placeholder="What's your sleep goal"
              value={formState.duration}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          </>
        );
      }
      default: {
        return (
          <div className="col-12">
            <input
              name="title"
              placeholder="Here's a new goal..."
              value={formState.title}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
        );
      }
      
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
