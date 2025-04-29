
import React from 'react';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  isVegan?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description, isVegan }) => {
  return (
    <div className="flex justify-between items-start p-3 rounded-md transition-colors hover:bg-secondary">
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <h3 className="font-medium text-lg">{name}</h3>
          {isVegan && <span className="text-green-600 text-sm">🌱</span>}
        </div>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      <span className="font-medium text-cafe-brown whitespace-nowrap">{price}</span>
    </div>
  );
};

export default MenuItem;
