
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { type MenuItemType } from './MenuCategory';

interface CategorySliderProps {
  title: string;
  emoji: string;
  items: MenuItemType[];
  id: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ title, emoji, items, id }) => {

  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: MenuItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
    <section id={id} className="mb-6 scroll-mt-20">
      <div className="flex items-center gap-2 border-b-2 border-cafe-cream pb-2 mb-6">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-2xl font-sans font-semibold text-cafe-brown">{title}</h2>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"  onClick={() => handleItemClick(item)}>
                {item.image ? (<div className="h-36">
                  <img
                    src={new URL(`../assets/${item.image}`, import.meta.url).href}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>) : <div className="h-36 bg-gradient-to-br from-cafe-light to-cafe-cream flex items-center justify-center">
                  <span className="text-4xl opacity-60">{emoji}</span>
                </div>}
                <div className="p-2">
                  <div className="flex items-center gap-1 mb-2">
                    <h3 className="font-medium text-lg text-cafe-dark">{item.name}</h3>
                    {item.isVegan && <span className="text-green-600 text-sm">🌱</span>}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-cafe-brown text-lg">{item.price}</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
     <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
     <DialogContent className="max-w-[90%] sm:max-w-md mx-auto rounded-lg">
       {selectedItem && (
         <>
           <div className="space-y-4 mt-4">
             {selectedItem.image ? (<div className="h-72 bg-gradient-to-br from-cafe-light to-cafe-cream flex items-center justify-center rounded-lg">
                  <img
                    src={new URL(`../assets/${selectedItem.image}`, import.meta.url).href}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>) : <div className="h-72 bg-gradient-to-br from-cafe-light to-cafe-cream flex items-center justify-center rounded-lg">
                  <span className="text-6xl opacity-60">{emoji}</span>
                </div>}

             <DialogTitle className="text-right text-xl font-sans text-cafe-dark">
               <div className="flex items-center gap-2">
                 {selectedItem.isVegan && <span className="text-green-600 text-sm">🌱</span>}
                 <span>{selectedItem.name}</span>
               </div>
             </DialogTitle>

             {selectedItem.description && (
               <div className="text-right">
                 <p className="text-muted-foreground">{selectedItem.description}</p>
               </div>
             )}
             
             <div className="text-right border-t pt-4">
               <span className="text-2xl font-bold text-cafe-brown">{selectedItem.price}</span>
             </div>
           </div>
         </>
       )}
     </DialogContent>
   </Dialog>
   </>
  );
};

export default CategorySlider;
