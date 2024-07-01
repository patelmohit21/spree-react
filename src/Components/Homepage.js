import React from 'react';
import './Homepage.css'; 

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Our Spree CommerceWebsite</h1>
        <p>Explore and discover new items!</p>
      </header>
      <main className="main-content">
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Services</li>
          </ul>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>Spree Commerce...</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Our Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
