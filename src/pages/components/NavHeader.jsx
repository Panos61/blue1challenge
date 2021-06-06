import React, { useState, useEffect } from 'react';
import LogoutBtn from './LogoutBtn';
import history from '../../utils/history';

const NavHeader = () => {
  // Set log in state
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setLoggedIn(userData);
    }
  }, []);

  // Get and parse user's JSON data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Handle logout
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    setLoggedIn(null);
    history.push('/login');
  };

  return (
    <div className='nav'>
      <span className='nav-msg'>{loggedIn && `Welcome, ${user.username}`}</span>
      <div className='nav-btn'>
        {loggedIn && <LogoutBtn onClick={handleLogout} />}
      </div>
    </div>
  );
};

export default NavHeader;
