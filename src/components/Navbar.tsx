import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.svg"
              alt="CMW Logo"
              className="h-8 w-auto"
            />
          </div>
          {/* Add your navigation items here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 