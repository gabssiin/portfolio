import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-opacity-80 backdrop-filter backdrop-blur-lg text-gray-400 text-center py-4 mt-auto w-full text-sm">
        <p>&copy; {new Date().getFullYear()} Gabriel Santos.</p>
    </footer>
  );
};

export default Footer;