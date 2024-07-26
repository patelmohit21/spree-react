// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from "./Components/Nav";
import "./App.css";
import Homepage from "./Components/Homepage";
import Product from "./Components/Product";
import FashionTrends from "./Components/FashionTrends";
import Trending from "./Components/Trending";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";
import LoginComponent from "./Components/LoginComponent";
import SignupComponent from "./Components/SignupComponent";
import UserDetailsComponent from "./Components/UserDetailsComponent";

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');

  useEffect(() => {
    
    setAccessToken(localStorage.getItem('accessToken') || '');
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken('');
  };

  return (
    <Router>
      <div className="App">
        <Nav onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Homepage />} />
          
          <Route 
            path="/login" 
            element={accessToken ? <Navigate to="/user-details" /> : <LoginComponent onLogin={handleLogin} />}
          />
          <Route 
            path="/signup" 
            element={<SignupComponent />} 
          />
          <Route 
            path="/user-details" 
            element={accessToken ? <UserDetailsComponent accessToken={accessToken} /> : <Navigate to="/login" />}
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Product />
        <FashionTrends />
        <Trending />
        <Collection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;