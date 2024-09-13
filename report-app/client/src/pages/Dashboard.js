import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAuthStore from '../store/authStore';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome, {user?.username}!</p>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/report">
        <button>Create a New Report</button>
      </Link>
    </div>
  );
};

export default Dashboard;
