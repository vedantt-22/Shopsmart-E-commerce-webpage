
import React from 'react';
import { Minus, Plus, Star, Heart, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

interface ProductOption {
  name: string;
  values: string[];
}

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    discountedPrice?: number;
    rating: number;
    reviewCount: number;
    description: string;
    features: string[];
    options: ProductOption[];
    stock: number;
    sku: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [selectedOptions, setSelectedOptions] = React.useState<Record<string, string>>({});
  const [favorites, setFavorites] = React.useState(false);

  React.useEffect(() => {
    // Initialize selected options with first value of each option
    const initialOptions: Record<string, string> = {};
    product.options.forEach(option => {
      initialOptions[option.name] = option.values[0];
    });
    setSelectedOptions(initialOptions);
  }, [product.options]);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Store cart items in localStorage for the Navbar to pick up
    const currentCartItems = localStorage.getItem('cartItems');
    const newCartItems = currentCartItems ? parseInt(currentCartItems, 10) + quantity : quantity;
    localStorage.setItem('cartItems', newCartItems.toString());
    
    // Display success message
    toast.success('Product added to cart!', {
      description: `${quantity} x ${product.name} added to your cart.`,
      duration: 3000,
    });
    
    // Update navbar cart count - in a real app this would use a global state management solution
    window.dispatchEvent(new Event('storage'));
  };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const toggleFavorite = () => {
    setFavorites(!favorites);
    if (!favorites) {
      toast.success('Added to wishlist!');
    } else {
      toast.info('Removed from wishlist');
    }
  };

  return (
    <div className="w-full md:w-1/2 md:px-6">
      {/* Product Title & Ratings */}
      <div>
        <div className="flex justify-between items-start">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
          <Button variant="ghost" size="icon" onClick={toggleFavorite}>
            <Heart className={`h-6 w-6 ${favorites ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </Button>
        </div>

        <div className="flex items-center mt-2">
          <div className="flex items-center mr-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
          </div>
          <Badge variant="outline" className="text-brand border-brand">In Stock</Badge>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-baseline">
        {product.discountedPrice ? (
          <>
            <span className="text-3xl font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
            <span className="ml-2 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
            <Badge className="ml-3 bg-green-500">Save ${(product.price - product.discountedPrice).toFixed(2)}</Badge>
          </>
        ) : (
          <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        )}
      </div>

      {/* Product Options */}
      <div className="mt-6 space-y-6">
        {product.options.map((option) => (
          <div key={option.name}>
            <h3 className="text-sm font-medium text-gray-900">{option.name}</h3>
            <RadioGroup 
              className="mt-2 flex flex-wrap gap-2"
              defaultValue={option.values[0]}
              onValueChange={(value) => handleOptionChange(option.name, value)}
            >
              {option.values.map((value) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={`${option.name}-${value}`} />
                  <Label htmlFor={`${option.name}-${value}`} className="cursor-pointer">{value}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>

      {/* Quantity Selector & Add to Cart */}
      <div className="mt-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-l-md"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="w-12 h-10 flex items-center justify-center border-x border-gray-300">
              <span className="text-gray-900">{quantity}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-r-md"
              onClick={incrementQuantity}
              disabled={quantity >= product.stock}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button 
            className="bg-brand hover:bg-brand-dark flex-1 h-10"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Benefits */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center space-x-2">
          <Truck className="h-5 w-5 text-brand" />
          <span className="text-sm text-gray-600">Free Shipping</span>
        </div>
        <div className="flex items-center space-x-2">
          <ShieldCheck className="h-5 w-5 text-brand" />
          <span className="text-sm text-gray-600">2 Year Warranty</span>
        </div>
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-5 w-5 text-brand" />
          <span className="text-sm text-gray-600">30-Day Returns</span>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="mt-8">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="text-sm text-gray-700 space-y-4">
              <p>{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="features" className="mt-4">
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            <div className="text-sm text-gray-700">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="text-gray-500">SKU</div>
                <div>{product.sku}</div>
                <div className="text-gray-500">Stock</div>
                <div>{product.stock} units</div>
                {product.options.map(option => (
                  <React.Fragment key={`spec-${option.name}`}>
                    <div className="text-gray-500">{option.name}</div>
                    <div>{option.values.join(', ')}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Separator className="my-8" />

      <div className="text-sm text-gray-500">
        <p>SKU: {product.sku} | Category: Electronics</p>
      </div>
    </div>
  );
};

export default ProductDetails;
