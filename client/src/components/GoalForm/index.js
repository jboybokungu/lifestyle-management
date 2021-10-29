import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button } from "reactstrap";
import { ADD_GOAL } from "../../utils/mutations";
import "../GoalForm/index.css";

const GoalForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    category: null,
    currentWeight: null,
    goalWeight: null,
    exercise: null,
    duration: null,
    calories: null,
    sleepDuration: null,
  });

  // Set up our mutation with an option to handle errors
  const [addGoal, { error }] = useMutation(ADD_GOAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      console.log(formState);
      await addGoal({
        variables: {
          ...formState, category: props.type
        },
      });
      
      window.location.replace('/me');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    const newValue = (
      name === "goalWeight" || 
      name === "currentWeight" || 
      name === "calories" ||
      name === "duration" ||
      name === "ounces"
    ) ? Number(value) : value;
    setFormState(form => ({ ...form, [name]: newValue }));


  };

  const buildForm = () => {
    switch (props.type) {
      case "fitness": {
        return (
          <div className="center">
            <>
              <div className="col-12">
                <input
                  name="currentWeight"
                  type="number"
                  placeholder="Enter your current Weight"
                  value={formState.currentWeight}
                  className="form-input w-80"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <input
                  name="goalWeight"
                  type="number"
                  placeholder="Enter your goal weight"
                  value={formState.goalWeight}
                  className="form-input w-80"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 ">
                <input
                  name="exercise"
                  type="text"
                  placeholder="Enter your exercises?"
                  value={formState.exercise}
                  className="form-input w-80"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <input
                  name="duration"
                  type="number"
                  placeholder="How long will it take you to reach your goal?"
                  value={formState.duration}
                  className="form-input w-80"
                  onChange={handleChange}
                />
              </div>
            </>
          </div>
        );
      }
      case "food": {
        return (
          <>
            <div className="col-12">
              <input
                name="calories"
                type="number"
                placeholder="How many calories does your food have?"
                value={formState.calories}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
          </>
        );
      }
      case "sleep": {
        return (
          <>
            <div className="col-12 justify-content-center">
              <input
                name="sleepDuration"
                type="number"
                placeholder="How long do you want to sleep?"
                value={formState.sleepDuration}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>
          </>
        );
      }

      case 'sleep': {
        return (
          <>
          <div className="col-12">
            <input
              name="sleepDuration"
              type="text"
              placeholder="How long do you want to sleep?"
              value={formState.sleepDuration}
              className="form-input w-100"
              onChange={handleChange}
            />
          </div>
          </>
        );
      }
      default: return null;
    }
  };

  return (
    <div className="col-12 col-lg-3 text-center">
      <h3>Hello Boss! What are we accomplishing today?</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="col-12 justify-content-center">
          <input
            name="title"
            type="text"
            placeholder="What's your goal"
            value={formState.title}
            className="form-input w-90"
            onChange={handleChange}
          />
        </div>
        {buildForm()}
        <div className="col-12 col-lg-3 justify-content-center">
          <Button outline color="secondary" type="submit">
            Add Goal
          </Button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-dark p-3 text-center justify-content-center">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default GoalForm;
