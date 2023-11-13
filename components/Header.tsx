import React from 'react';

const Header = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-blue-500">
      <div className="text-white text-lg">My Blog</div>
      <div>
        <a href="#" className="text-white mx-3">Home</a>
        <a href="#" className="text-white mx-3">About</a>
        <a href="#" className="text-white mx-3">Contact</a>
        <a href="#" className="text-white mx-3">Login</a>
      </div>
    </nav>
  );
};

export default Header;