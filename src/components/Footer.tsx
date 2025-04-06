
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-b border-gray-200 pb-12">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Truck className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-600">On all orders over $99</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Shield className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure payments</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <CreditCard className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Money Back Guarantee</h3>
              <p className="text-sm text-gray-600">30 day return policy</p>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">ShopSmart</h3>
            <p className="text-gray-600 mb-4">
              Your one-stop shop for all your electronic needs. Quality products, competitive prices, exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-brand">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-brand">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand">All Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Best Sellers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Special Offers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Coming Soon</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-brand">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter to get updates on our latest offers!</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-r-none" 
              />
              <Button className="rounded-l-none bg-brand hover:bg-brand-dark">Subscribe</Button>
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand" />
                <span className="text-gray-600">support@shopsmart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand" />
                <span className="text-gray-600">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-brand" />
                <span className="text-gray-600">123 Commerce St, New York, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
