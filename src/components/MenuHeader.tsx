
import React from 'react';

export const MenuHeader = () => {
  return (
    // <header className="flex h-[300px] flex-col items-center justify-center py-8 px-4 bg-[url('src/assets/header_bg_img.jpeg')] bg-cover bg-center rounded-lg shadow-md mb-8">
        <header className="relative h-[300px] flex flex-col items-center justify-center px-4 py-8 rounded-lg shadow-md mb-8 overflow-hidden">

        <div className="absolute inset-0 bg-[url('src/assets/header_bg_img.jpeg')] bg-cover bg-center opacity-80 z-0" ></div>

      <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-2 z-10">קפה פאוזה</h1>
      <p className="text-xl text-cafe-cream font-medium z-10">תפריט</p>
    </header>
  );
};

export default MenuHeader;
