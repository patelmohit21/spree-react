// LogoutComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    onLogout();

    
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutComponent;
