import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#a435f0]">
          Udemy Clone
        </Link>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-[#a435f0] text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
