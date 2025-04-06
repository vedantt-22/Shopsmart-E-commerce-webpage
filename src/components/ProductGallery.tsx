
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const isMobile = useIsMobile();

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full md:w-1/2 md:px-4 mb-8 md:mb-0">
      <div className="relative">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="w-full h-[300px] md:h-[500px] object-contain"
          />
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white opacity-90 rounded-full"
          onClick={handlePreviousImage}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white opacity-90 rounded-full"
          onClick={handleNextImage}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Thumbnails */}
      <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 p-1 rounded-md ${
              currentImageIndex === index ? 'border-2 border-brand' : 'border border-gray-200'
            }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
