// Node Modules
import React from "react";
// Utilities
import Auth from "../utils/auth";
// import { QUERY_USERS } from '../utils/queries';
// Components
// import UserList from '../components/UserList';
import Login from "./Login";
import Signup from "./Signup";

const Home = () => {
  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  };

  return (
    <main id="holder">
      <div>{renderUsername()}</div>
      <div className="credential-controls">
        <section>
          <Login />
        </section>
        <section>
          <Signup />
        </section>
      </div>
    </main>
  );
};

export default Home;
