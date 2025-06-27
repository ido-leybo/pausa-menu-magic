
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { type MenuItemType } from './MenuCategory';

interface CategorySliderProps {
  title: string;
  emoji: string;
  items: MenuItemType[];
  id: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ title, emoji, items, id }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <div className="flex items-center gap-2 border-b-2 border-cafe-cream pb-2 mb-6">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-2xl font-serif font-semibold text-cafe-brown">{title}</h2>
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
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-br from-cafe-light to-cafe-cream flex items-center justify-center">
                  <span className="text-4xl opacity-60">{emoji}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <h3 className="font-medium text-lg text-cafe-dark">{item.name}</h3>
                    {item.isVegan && <span className="text-green-600 text-sm">🌱</span>}
                  </div>
                  {item.description && (
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  )}
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
  );
};

export default CategorySlider;
