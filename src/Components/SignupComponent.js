// SignupComponent.js
import React, { useState } from 'react';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match.');
      }

      const response = await fetch('http://localhost:3000/api/v2/storefront/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            first_name: firstName,
            last_name: lastName,
            selected_locale: 'en',
            password,
            password_confirmation: confirmPassword,
            public_metadata: {
              user_segment: 'supplier',
            },
            private_metadata: {
              has_abandoned_cart: false,
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Signup failed.');
      }

      const data = await response.json();
      console.log('Signup successful:', data);
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupComponent;
