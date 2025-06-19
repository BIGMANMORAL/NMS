import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;