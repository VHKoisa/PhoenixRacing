import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! Page not found</p>
      <p className="not-found-description">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="not-found-link">
        Go back to homepage
      </a>
    </div>
  );
};

export default NotFound;