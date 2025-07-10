
import React from 'react';
import MenuHeader from '@/components/MenuHeader';
import CategorySlider from '@/components/CategorySlider';
import HamburgerMenu from '@/components/HamburgerMenu';
import { type MenuItemType } from '@/components/MenuCategory';

const Index = () => {
  // Menu data
  const sandwiches: MenuItemType[] = [
    { name: 'כריך טונה', price: '₪38', description: 'סלט טונה, חסה לאליק ועגבניות' },
    { name: 'כריך אבוקדו', price: '₪38', isVegan: true,description:"אבוקדו, רוקט, בצל מוחמץ ועגבניה" },
    { name: 'כריך קפרזה', price: '₪38',description:"ממרח פסטו, מוצרלה, עגבניות, בלסמי מצומצם ושמן זית" },
    { name: 'כריך קממבר', price: '₪38',description:"חמאה, קממבר, דבש, רוקט ושקדים קלויים" },
    { name: 'בייגל טוסט', price: '₪42',description:"רוטב פיצה, מוצרלה וזיתי קלמטה" },
  ];

  const salads: MenuItemType[] = [
    { name: 'יווני', price: '₪38' , image: 'greek_salad_2.jpeg', description:"עגבניות, מלפפון, בצל סגול, פלפלים, זיתי קלמטה, פטה, זעתר, שמן זית ולימון"},
    { name: 'קפרזה', price: '₪38', image: 'kapreza_2.jpeg',description:"עגבניות שרי, מוצרלה, בזיליקום, בלסמי מצומצם ושמן זית" },
  ];

  const pastries: MenuItemType[] = [
    { name: 'שוקולד צ\'יפס', price: '₪18', image: 'chocolate_chips.jpeg' },
    { name: 'בראוניז', price: '₪8', image: 'brownies.jpeg' },
    { name: 'רוגלך', price: '₪5', image: 'rogalach.jpeg' },
    { name: 'סינבון', price: '₪22' },
    // { name: 'עוגת גזר', price: '₪18' },
    { name: 'עוגת גבינה', price: '₪36', image: 'cheese_cake.jpeg' },
    { name: 'עוגת טופי קראנצ׳', price: '₪18' },
  ];

  const pizzas: MenuItemType[] = [
    { name: 'מרגריטה', price: '₪54' },
    { name: 'ספייסי', price: '₪60' },
    { name: 'פאוזה', price: '₪60', image: 'pizza.jpeg' },
  ];

  const coffee: MenuItemType[] = [
    { name: 'קפה הפוך', price: '₪14 / ₪18' , image: 'coffee.jpeg'},
    { name: 'אספרסו / כפול', price: '₪10 / ₪12', image: 'coffee.jpeg' },
    { name: 'אמריקנו חם', price: '₪12', image: 'coffee.jpeg' },
    { name: 'אמריקנו קר', price: '₪14', image: 'coffee.jpeg' },
    { name: 'קפה קר', price: '₪16', image: 'coffee.jpeg' },
    { name: 'קפה שחור', price: '₪10', image: 'coffee.jpeg' },
    { name: 'קורטדו', price: '₪12 / ₪14', image: 'coffee.jpeg' },
    { name: 'מקיאטו', price: '₪12 / ₪14', image: 'coffee.jpeg' },
    { name: 'שוקו חם / קר', price: '₪12 / ₪16' },
    { name: 'מאצ׳ה חם / קר', price: '₪22 / ₪24' },
  ];

  const tea: MenuItemType[] = [
    { name: 'DETOX', price: '₪16',description:"לואיזה ונענע" },
    { name: 'CALM', price: '₪16',description:"קמומיל, תפוח וציפורן" },
    { name: 'FRESH', price: '₪16',description:"היביסקוס ליים" },
    { name: 'NAMASTEA', price: '₪22',description:"צ׳אי מסאלה" },
  ];

  const freshJuices: MenuItemType[] = [
    { name: 'תפוזים', price: '₪16' , image: 'orange_juice.jpeg'},
    { name: 'תפוחים וג\'ינג\'ר', price: '₪16', image: 'apple_ginger_juice.jpeg' },
    // { name: 'תפוזים וגזר', price: '₪16' },
    { name: 'תפוחים ואוכמניות', price: '₪16', image: 'apple_blueberry_juice.jpeg' },
  ];

  const coldDrinks: MenuItemType[] = [
    { name: 'קולה', price: '₪12' , image: 'cola.jpeg'},
    { name: 'קולה זירו', price: '₪12' , image: 'zero.jpeg'},
    { name: 'ס. פלגרינו לימון', price: '₪12' , image: 'sn_pelegrino.jpeg'},
    // { name: 'ספרייט', price: '₪10' },
    { name: 'סודה', price: '₪9' , image: 'soda.jpeg'},
    { name: 'מים', price: '₪8', image: 'water.jpeg' },
    { name: 'מים בטעמים', price: '₪12' , image: 'apple_water.jpeg'},
  ];

  // Categories for navigation
  const categories = [
    { id: 'sandwiches', title: 'כריכים/טוסטים', emoji: '🥪' },
    { id: 'salads', title: 'סלטים', emoji: '🥗' },
    { id: 'pastries', title: 'מאפים/קינוחים', emoji: '🍪' },
    // { id: 'pizzas', title: 'פיצות', emoji: '🍕' },
    { id: 'coffee', title: 'משקאות חמים', emoji: '☕' },
    { id: 'tea', title: 'תה', emoji: '🍵' },
    { id: 'fresh-juices', title: 'משקאות סחוטים', emoji: '🍹' },
    { id: 'cold-drinks', title: 'שתייה קלה', emoji: '🧊' },
  ];

  return (
    <div className="min-h-screen bg-newBg-lightgreen">
      <HamburgerMenu categories={categories} />
      
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <MenuHeader />
        
        <div className="bg-white rounded-lg shadow-lg p-2 md:p-8">
          <div className="mb-8">
          <h2 className="text-2xl font-sans font-bold text-center mb-8 text-cafe-dark">אוכל</h2>
            
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
            
            {/* <CategorySlider 
              id="pizzas"
              title="חם, עגול וטעים" 
              emoji="🍕" 
              items={pizzas} 
            /> */}
          </div>
          
          <div>
          <h2 className="text-2xl font-sans font-bold text-center mb-8 text-cafe-dark">שתייה</h2>
            
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
