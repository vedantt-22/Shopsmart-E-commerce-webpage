
import React from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(parseInt(storedCartItems, 10));
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Deals', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-brand">ShopSmart</a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          )}

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex relative w-1/3">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Mobile Menu Button & Cart Button */}
          <div className="flex items-center space-x-4">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navLinks.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.href} 
                        className="text-xl text-gray-800 hover:text-brand"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            )}

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-gray-600" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        {isMobile && (
          <div className="mt-4 relative">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
