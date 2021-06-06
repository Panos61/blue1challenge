import React from 'react';

const Badge = ({ children }) => {
  return (
    <span
      span
      style={{ color: 'darkgreen', fontSize: '15px', fontWeight: '300' }}
    >
      {children}
    </span>
  );
};

export default Badge;
