import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}