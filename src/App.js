// App.js
import React, { useState } from 'react';
import Nav from "./Components/Nav";
import "./App.css";
import Homepage from "./Components/Homepage";
import Product from "./Components/Product";
import FashionTrends from "./Components/FashionTrends";
import Trending from "./Components/Trending";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";
import LoginComponent from "./Components/LoginComponent";
import UserDetailsComponent from "./Components/UserDetailsComponent";

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');

  const handleLogin = (token) => {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken('');
  };

  return (
    <div className="App">
      <Nav onLogout={handleLogout} />

      <div>
        {!accessToken ? (
          <LoginComponent onLogin={handleLogin} />
        ) : (
          <UserDetailsComponent accessToken={accessToken} />
        )}
      </div>

      <Homepage />
      <Product />
      <FashionTrends />
      <Trending />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
