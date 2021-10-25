// // Node Modules
// import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// // Utilities
// import Auth from '../utils/auth';
// import { QUERY_USERS, QUERY_USER, QUERY_ME } from '../utils/queries';
// // Components
// import UserList from '../components/UserList';

// const Profile = () => {
//   const { id } = useParams();

//   // Get current user
//   const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
//     variables: { id },
//   });

//   // Get a list of all users
//   const { usersLoading, data: usersData } = useQuery(QUERY_USERS);

//   const user = data?.me || data?.user || {};
//   const users = usersData?.users || [];

//   if (error) console.log(error);

//   // redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
//     return <Redirect to="/me" />;
//   }

//   if (loading) {
//     return <h4>Loading...</h4>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

//   const renderUserList = () => {
//     if (usersLoading) return null;
//     // Only renders users who's profile we're not currently viewing
//     const notMeUsers = users.filter(o => o._id !== user._id);
//     return <UserList users={notMeUsers} title="User List" />;
//   };

//   const renderCurrentUserInfo = () => {
//     if (id) return null;
//     return (
//       <ul>
//         <li>username: {user.username}</li>
//         <li>email: {user.email}</li>
//       </ul>
//     );
//   }

//   return (
//     <div>
//       <div>
//         <h2>
//           Viewing {id ? `${user.username}'s` : 'your'} profile.
//         </h2>
//         {renderCurrentUserInfo()}
//         {renderUserList()}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Profile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue=" "
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue=""
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="danger" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      // src={require("assets/img/emilyz.jpg").default}
                    />
                    <h5 className="title">Kayla L</h5>
                  </a>
                  <p className="description">LYBL  </p>
                </div>
                <div className="card-description">
                  Hello, I want to be the best I can be!
                  I'm excited to start my journey!
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Profile;