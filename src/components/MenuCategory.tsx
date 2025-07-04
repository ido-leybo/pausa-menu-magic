
import React from 'react';
import MenuItem from './MenuItem';

export type MenuItemType = {
  name: string;
  price: string;
  description?: string;
  isVegan?: boolean;
};

interface MenuCategoryProps {
  title: string;
  emoji: string;
  items: MenuItemType[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, emoji, items }) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 border-b-2 border-cafe-cream pb-2 mb-6">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-2xl font-serif font-semibold text-cafe-brown">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <MenuItem 
            key={index} 
            name={item.name} 
            price={item.price} 
            description={item.description}
            isVegan={item.isVegan}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
