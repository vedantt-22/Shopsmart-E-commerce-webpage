
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group transition-all hover:shadow-md">
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                  />
                </div>
                
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-brand">New</Badge>
                )}
                
                {product.isBestSeller && (
                  <Badge className="absolute top-2 right-2 bg-amber-500">Best Seller</Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 line-clamp-2 h-12">{product.name}</h3>
                
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                </div>
                
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-baseline">
                    {product.discountedPrice ? (
                      <>
                        <span className="text-lg font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
                        <span className="ml-1 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                </div>
                
                <Button className="w-full mt-3 bg-brand hover:bg-brand-dark">View Product</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
