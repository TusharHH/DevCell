import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Report App</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to continue.
      </p>
    </div>
  );
};

export default Homepage;