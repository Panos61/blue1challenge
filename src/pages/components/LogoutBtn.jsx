import React from 'react';
import { Link } from 'react-router-dom';

const LogoutBtn = ({ onClick }) => {
  return (
    <div>
      <Link to='/login'>
        <button className='logout-btn' onClick={onClick}>
          LOGOUT
        </button>
      </Link>
    </div>
  );
};

export default LogoutBtn;
