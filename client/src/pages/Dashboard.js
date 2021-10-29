import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_GOAL } from "../utils/queries"
import {
  Card,
  CardGroup,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";

import GoalForm from '../components/GoalForm';
function Dashboard() {
  const { loading, data } = useQuery(QUERY_GET_GOAL);
  const goals = data?.getGoal || [];
  console.log(goals);
  const [goal, setGoal] = useState('fitness');
  const handleSetGoal = event => {
    setGoal(event.target.value);
  }
  return (
    <div>

      <select name="chooseGoal" onChange={handleSetGoal} defaultValue={goal}>
        <option value="fitness">
          Fitness
        </option>
        <option value="food">
          Food
        </option>
        <option value="sleep">
          Sleep
        </option>
      </select>

      <div className="col-12 col-md-8 mb-3">
        {loading ?
          <div>Loading...</div> :
          <div>
            {goals.map(
              goal => <div>
                 <h2> { goal.title } </h2>
                 <p> { goal.currentWeight } </p>
                 <p> { goal.goalWeight } </p>
                 <p> { goal.exercise } </p>
                 <p> { goal.duration }</p>

                 </div>

            )}
          </div>
        }
      </div>


      <GoalForm type={goal} />
      <CardGroup>
        <Card>
          <CardImg
            alt="Sleep"
            src="https://images.unsplash.com/photo-1517912172058-994f5e342dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText className="text-center">SLEEP</CardText>
            {/* <Button>
        Button
      </Button> */}
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Fitness"
            src="https://images.unsplash.com/photo-1610543123792-135b26601797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText className="text-center"> FITNESS</CardText>
            {/* <Button>
        Button
      </Button> */}
          </CardBody>
        </Card>
        <Card>
          <CardImg
            alt="Diet"
            src="https://images.unsplash.com/photo-1623855244697-5d8fbe9c7892?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
            <CardText className="text-center">FOOD</CardText>
            {/* <Button>
        Button
      </Button> */}
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Dashboard;