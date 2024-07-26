// Nav.js
import React, { useEffect, useState } from 'react';
import './Nav.css';
import { FiUserPlus } from 'react-icons/fi';
import SignupComponent from './SignupComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import { BrowserRouter as Router } from 'react-router-dom';

const transformData = (apiData) => {
  const map = {};
  const rootNodes = [];

  apiData.forEach(item => {
    map[item.id] = { ...item.attributes, id: item.id, children: [], expanded: false }; 
  });

  apiData.forEach(item => {
    if (item.relationships.parent.data) {
      const parentId = item.relationships.parent.data.id;
      if (map[parentId]) {
        map[parentId].children.push(map[item.id]);
      }
    } else {
      rootNodes.push(map[item.id]);
    }
  });

  return rootNodes;
};

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (!node.children || node.children.length === 0) {
    const className = "level-" + node.depth;
    return (
      <li className={className}>
        {node.name}
      </li>
    );
  }

  const rootClassName = "level-" + node.depth + (expanded ? ' expanded' : '');
  const childClassName = "level-" + node.depth;

  return (
    <li>
      <div className={'node ' + rootClassName} onMouseEnter={toggleExpanded} onMouseLeave={toggleExpanded}>
        {node.name}
      </div>
      <ul className={'child-list ' + (expanded ? 'expanded' : '')}>
        {node.children.map(child => (
          <TreeNode key={child.id} node={child} />
        ))}
      </ul>
    </li>
  );
};

const Nav = ({ onLogout, onLogin }) => {
  const [data, setData] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  useEffect(() => {
    fetch("http://localhost:3000/api/v2/storefront/taxons.json", {
      mode: "cors"
    })
      .then(response => response.json())
      .then(responseData => {
        const transformedData = transformData(responseData.data);
        setData(transformedData);
      });
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
    setShowDropdown(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    onLogout();
    setShowLoginForm(false);
    setShowSignupForm(false);
    setShowDropdown(false);
  };

  return (
    <Router>
      <div className="nav-container">
        {data ? (
          <div>
            <ul className="category">
              {data.map((category) => (
                <TreeNode key={category.id} node={category} />
              ))}
              <li className="li-container" onClick={toggleDropdown}>
                <FiUserPlus className="icon" />
                {showDropdown && (
                  <div className="dropdown">
                    {!isLoggedIn ? (
                      <>
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignupClick}>Sign Up</button>
                      </>
                    ) : (
                      <LogoutComponent onLogout={handleLogout} />
                    )}
                  </div>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {showSignupForm && <SignupComponent />}
        {showLoginForm && <LoginComponent onLogin={(token) => {
          setIsLoggedIn(true);
          onLogin(token);
        }} />}
      </div>
    </Router>
  );
};

export default Nav;
