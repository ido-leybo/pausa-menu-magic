
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
}

interface HamburgerMenuProps {
  categories: MenuCategory[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
      <button className="fixed top-4 right-4 z-50 bg-cafe-brown text-white p-3 rounded-full shadow-lg hover:bg-cafe-dark transition-colors">
      <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-sans font-bold text-cafe-dark">תפריט</h2>
          </div>
          
          <nav className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="w-full text-right p-3 rounded-lg hover:bg-cafe-light transition-colors flex items-center gap-3"
                >
                  <span className="text-2xl">{category.emoji}</span>
                  <span className="font-medium text-cafe-dark">{category.title}</span>
                </button>
              ))}
            </div>
          </nav>
          
          <div className="p-4 border-t">
            <p className="text-center text-sm text-cafe-brown">קפה פאוזה</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
