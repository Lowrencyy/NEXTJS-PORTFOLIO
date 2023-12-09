import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;