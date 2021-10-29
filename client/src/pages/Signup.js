import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Col, Row, Form, FormGroup, Label, Button } from "reactstrap";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------sign-up-style-----------------------//

  const renderForm = () => {
    if (data) {
      return (
        <p className="text-success">
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      );
    }

    return (
      <form className="text-center">
        <Form>
          <Row xs="3">
            <Col md={6}>
              <FormGroup>
                <Label for="Username"></Label>
                <input
                  className="username text-success text-center"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Email"></Label>
                <input
                  className="email text-success text-center"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password"></Label>
                <input
                  className="password text-center"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button outline color="secondary" type="submit" onClick={handleFormSubmit}>
                Submit
              </Button>{" "}
            </Col>
          </Row>
        </Form>
      </form>
    );
  };

  return (
    <>
      <h4>Sign Up</h4>
      <div className="text-danger">
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </>
  );
};

export default Signup;
