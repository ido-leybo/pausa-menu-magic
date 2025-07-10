
import React from 'react';

export const MenuHeader = () => {
  return (
        <header className="relative h-[300px] flex flex-col items-center justify-center px-4 py-8 rounded-lg shadow-md mb-8 overflow-hidden">

        <img src={new URL('../assets/header_bg_img.jpeg', import.meta.url).href} className="absolute inset-0 opacity-80 z-0 w-full h-full object-cover" />

      <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-2 z-10">קפה פאוזה</h1>
      <p className="text-xl text-cafe-cream font-medium z-10">תפריט</p>
    </header>
  );
};

export default MenuHeader;
