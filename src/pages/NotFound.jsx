import React from 'react';

const NotFound = () => {
  const notFoundStyle = {
    color: 'orangered',
    padding: '15vh 0',
    textAlign: 'center',
  };

  return (
    <div style={notFoundStyle}>
      <h1>404 - Page not found :( </h1>
    </div>
  );
};

export default NotFound;
