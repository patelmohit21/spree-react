// LogoutComponent.js
import React from 'react';

const LogoutComponent = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
