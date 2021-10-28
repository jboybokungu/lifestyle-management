// Node Modules
import React from 'react';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';
// Components
import UserList from '../components/UserList';
import { Spinner } from "reactstrap";


const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  const renderUserList = () => {
    if (loading) {
      return <div>
        <h2>Loading...</h2>
      <Spinner color="dark" type="grow">Loading...</Spinner>
      </div>

    } else {
      return <UserList users={users} title="List of Users" />
    }
  } 

  const renderUsername = () => {
    if (!Auth.loggedIn()) return null;
    return Auth.getProfile().data.username;
  }

  return (
    <main>
      <div>
        {renderUsername()}
      </div>
      <div>
        {renderUserList()}
      </div>
    </main>
  );
};

export default Home;
