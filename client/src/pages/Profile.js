// Node Modules
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// Components


const Profile = () => {
  const { id } = useParams();

  // Get current user
  const { loading, data, error } = useQuery(id ? QUERY_USER : QUERY_ME, {
    variables: { id },
  });

  const user = data?.me || data?.user || {};

  if (error) console.log(error);

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === id) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const renderUserGoals = () => {
    if (loading) return null;
    // Only renders users who's profile we're not currently viewing
    const goals = user?.goals?.length ? user.goals : [];
    console.log(user);
    return (
      <table className="table table-dark">
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
    )
  };

  const renderCurrentUserInfo = () => {
    if (id) return null;
    return (
      <ul>
        <li>username: {user.username}</li>
        <li>email: {user.email}</li>
      </ul>
    );
  }

  return (
    <div>
      <div>
        <h2>
          Viewing {id ? `${user.username}'s` : 'your'} profile.
        </h2>
        {renderCurrentUserInfo()}
        {renderUserGoals()}
      </div>
    </div>
  );
};

export default Profile;