import React from "react";
import {
  Card,
  CardGroup,
  CardImg,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";

import GoalForm from "../components/GoalForm";
function Dashboard() {
  return (
    <div>
      <GoalForm type="fitness" />
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
            <CardText className="text-center"></CardText>
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
            <CardText className="text-center"></CardText>
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
            <CardText className="text-center"></CardText>
          </CardBody>
        </Card>
      </CardGroup>
  </div>

  
  );
}

export default Dashboard;
