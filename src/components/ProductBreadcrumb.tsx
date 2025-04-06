
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ProductBreadcrumbProps {
  items: BreadcrumbItem[];
}

const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({ items }) => {
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
        <li className="flex items-center">
          <a href="/" className="flex items-center hover:text-brand transition-colors">
            <Home className="h-4 w-4 mr-1" />
            <span>Home</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-900">{item.name}</span>
            ) : (
              <a href={item.href} className="hover:text-brand transition-colors">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProductBreadcrumb;
