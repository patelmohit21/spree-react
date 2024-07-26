import React, { useState, useEffect } from 'react';

const UserDetailsComponent = ({ accessToken }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v2/storefront/account', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }

        const userData = await response.json();
        console.log('User data:', userData);
        setUserInfo(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
        
      }
    };

    if (accessToken) {
      fetchUserInfo();
    }
  }, [accessToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userInfo) {
    return <div>Error: Failed to fetch user data.</div>;
  }

  return (
    <div>
      <h2>My Account</h2>
      <ul>
        <li>ACCOUNT INFO</li>
        <li>{userInfo.data.attributes.email}</li>
        <li>Store Credit: {userInfo.data.attributes.store_credit}</li>
      </ul>
      <h3>Add New Address</h3>
      <h2>My Orders</h2>
      <p>You have no Orders Yet</p>
    </div>
  );
};

export default UserDetailsComponent;
