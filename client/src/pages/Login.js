import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Col, Row, Form, FormGroup, Label, Button } from "reactstrap";

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <form className="text-center">
        <Form>
          <Row xs="3">
            <Col md={6}>
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
      </form >
    );
  };


return (
  <>
    <h4>Login</h4>
    <div>
      {renderForm()}
      {error && <div>{error.message}</div>}
    </div>
  </>
);
};

export default Login;
