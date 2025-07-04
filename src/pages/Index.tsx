
import React from 'react';
import MenuHeader from '@/components/MenuHeader';
import CategorySlider from '@/components/CategorySlider';
import HamburgerMenu from '@/components/HamburgerMenu';
import { type MenuItemType } from '@/components/MenuCategory';

const Index = () => {
  // Menu data
  const sandwiches: MenuItemType[] = [
    { name: 'כריך טונה', price: '₪38' },
    { name: 'כריך אבוקדו', price: '₪38', isVegan: true },
    { name: 'כריך קפרזה', price: '₪38' },
    { name: 'כריך קממבר', price: '₪38' },
    { name: 'בייגל טוסט', price: '₪42' },
  ];

  const salads: MenuItemType[] = [
    { name: 'יווני', price: '₪38' },
    { name: 'קיסר', price: '₪38' },
    { name: 'קפרזה', price: '₪38' },
  ];

  const pastries: MenuItemType[] = [
    { name: 'שוקולד צ\'יפס', price: '₪18' },
    { name: 'בראוניז', price: '₪8' },
    { name: 'רוגלך', price: '₪5' },
    { name: 'סינבון', price: '₪22' },
    { name: 'עוגת גזר', price: '₪18' },
    { name: 'עוגת גבינה', price: '₪36' },
    { name: 'עוגת טופי קראנצ׳', price: '₪18' },
  ];

  const pizzas: MenuItemType[] = [
    { name: 'מרגריטה', price: '₪54' },
    { name: 'ספייסי', price: '₪60' },
    { name: 'פאוזה', price: '₪60' },
  ];

  const coffee: MenuItemType[] = [
    { name: 'קפה הפוך', price: '₪14' },
    { name: 'אספרסו / כפול', price: '₪10 / ₪12' },
    { name: 'אמריקנו חם', price: '₪12' },
    { name: 'אמריקנו קר', price: '₪14' },
    { name: 'קפה קר', price: '₪16' },
    { name: 'קפה שחור', price: '₪10' },
    { name: 'קורטדו', price: '₪12 / ₪14' },
    { name: 'מקיאטו', price: '₪12 / ₪14' },
    { name: 'שוקו חם / קר', price: '₪12 / ₪16' },
    { name: 'מאצ׳ה חם / קר', price: '₪22 / ₪24' },
  ];

  const tea: MenuItemType[] = [
    { name: 'DETOX', price: '₪16' },
    { name: 'CALM', price: '₪16' },
    { name: 'FRESH', price: '₪16' },
    { name: 'NAMASTEA', price: '₪22' },
  ];

  const freshJuices: MenuItemType[] = [
    { name: 'תפוזים', price: '₪16' },
    { name: 'תפוחים וג\'ינג\'ר', price: '₪16' },
    { name: 'תפוזים וגזר', price: '₪16' },
    { name: 'תפוחים ואוכמניות', price: '₪16' },
  ];

  const coldDrinks: MenuItemType[] = [
    { name: 'קולה / קולה זירו', price: '₪12' },
    { name: 'ס. פלגרינו לימון', price: '₪12' },
    { name: 'ספרייט', price: '₪10' },
    { name: 'סודה', price: '₪9' },
    { name: 'מים', price: '₪8' },
    { name: 'מים בטעמים', price: '₪12' },
  ];

  // Categories for navigation
  const categories = [
    { id: 'sandwiches', title: 'לחם עם שדרוג', emoji: '🥪' },
    { id: 'salads', title: 'ירוקים אבל טעימים', emoji: '🥗' },
    { id: 'pastries', title: 'חובה ליד הקפה', emoji: '🍪' },
    { id: 'pizzas', title: 'חם, עגול וטעים', emoji: '🍕' },
    { id: 'coffee', title: 'קפה ומשקאות חמים', emoji: '☕' },
    { id: 'tea', title: 'תה', emoji: '🍵' },
    { id: 'fresh-juices', title: 'טבעי, טרי, טעים', emoji: '🍹' },
    { id: 'cold-drinks', title: 'פשוט משקאות קרים', emoji: '🧊' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cafe-light to-white">
      <HamburgerMenu categories={categories} />
      
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <MenuHeader />
        
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-center mb-8 text-cafe-dark">אוכל</h2>
            
            <CategorySlider 
              id="sandwiches"
              title="לחם עם שדרוג" 
              emoji="🥪" 
              items={sandwiches} 
            />
            
            <CategorySlider 
              id="salads"
              title="ירוקים אבל טעימים" 
              emoji="🥗" 
              items={salads} 
            />
            
            <CategorySlider 
              id="pastries"
              title="חובה ליד הקפה" 
              emoji="🍪" 
              items={pastries} 
            />
            
            <CategorySlider 
              id="pizzas"
              title="חם, עגול וטעים" 
              emoji="🍕" 
              items={pizzas} 
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-center mb-8 text-cafe-dark">שתייה</h2>
            
            <CategorySlider 
              id="coffee"
              title="קפה ומשקאות חמים" 
              emoji="☕" 
              items={coffee} 
            />
            
            <CategorySlider 
              id="tea"
              title="תה" 
              emoji="🍵" 
              items={tea} 
            />
            
            <CategorySlider 
              id="fresh-juices"
              title="טבעי, טרי, טעים" 
              emoji="🍹" 
              items={freshJuices} 
            />
            
            <CategorySlider 
              id="cold-drinks"
              title="פשוט משקאות קרים" 
              emoji="🧊" 
              items={coldDrinks} 
            />
          </div>
        </div>
        
        <footer className="text-center mt-8 text-cafe-brown text-sm">
          <p>© {new Date().getFullYear()} קפה פאוזה</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
