
import React from 'react';

export const MenuHeader = () => {
  return (
    <header className="flex flex-col items-center justify-center py-8 px-4 bg-cafe-light bg-cafe-texture rounded-lg shadow-md mb-8">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-cafe-dark mb-2">קפה פאוזה</h1>
      <p className="text-xl text-cafe-brown font-medium">תפריט</p>
    </header>
  );
};

export default MenuHeader;
