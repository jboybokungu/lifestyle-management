import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_GOAL } from "../utils/queries"


import GoalForm from "../components/GoalForm";
function Dashboard() {
  const { loading, data } = useQuery(QUERY_GET_GOAL);
  const goals = data?.getGoal || [];
  console.log(goals);

  const [goal, setGoal] = useState("fitness");
  const handleSetGoal = (event) => {

    setGoal(event.target.value);
  };
  return (

    <div>
      <div className="center-goals">
        <select name="chooseGoal" onChange={handleSetGoal} defaultValue={goal}>
          <option value="fitness">Fitness</option>
          <option value="food">Food</option>
          <option value="sleep">Sleep</option>
        </select>
        <GoalForm type={goal} />
        <div className="col-12 col-md-8 mb-3">
          {loading ?
            <div>Loading...</div> :
            <div>
              <table className="table table-dark text-center">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Current Weight</th>
                    <th scope="col">Goal Weight</th>
                    <th scope="col">Exercise</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {goals.map(goal => (
                    <tr>
                      <td>{goal.title}</td>
                      <td>{goal.category}</td>
                      <td>{goal.currentWeight}</td>
                      <td>{goal.goalWeight}</td>
                      <td>{goal.exercise}</td>
                      <td>{goal.duration}</td>
                      <td>{goal.calories}</td>
                    </tr>)
                  )}
                </tbody>
              </table>
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
