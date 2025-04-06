
import React from 'react';
import Navbar from '@/components/Navbar';
import ProductGallery from '@/components/ProductGallery';
import ProductDetails from '@/components/ProductDetails';
import CustomerReviews from '@/components/CustomerReviews';
import RelatedProducts from '@/components/RelatedProducts';
import Footer from '@/components/Footer';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

const Index = () => {
  // Product images data
  const productImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Ultrabook Pro X15 - Main Image",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Ultrabook Pro X15 - Side View",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Ultrabook Pro X15 - Display",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Ultrabook Pro X15 - Keyboard Close-up",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1632187981988-40f3063c79b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Ultrabook Pro X15 - Performance Graph",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1621570273800-1b826ffe3a32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Ultrabook Pro X15 - Ports",
    },
  ];

  // Product data
  const productData = {
    id: "prod-123456",
    name: "Ultrabook Pro X15 - Intel Core i9, 32GB RAM, 1TB SSD",
    price: 2499.99,
    discountedPrice: 2199.99,
    rating: 4.7,
    reviewCount: 247,
    description: "Experience unmatched performance with the new Ultrabook Pro X15. Powered by the latest Intel Core i9 processor, 32GB of high-speed RAM, and a blazing-fast 1TB SSD, this laptop delivers exceptional speed for demanding tasks. The stunning 15.6-inch 4K OLED display with HDR support brings your content to life with vibrant colors and deep blacks. Weighing just 3.5 pounds with an all-day battery life, it's the perfect companion for professionals on the go.",
    features: [
      "Latest Intel Core i9 processor with 12 cores for unprecedented performance",
      "32GB DDR5 RAM for smooth multitasking and demanding applications",
      "1TB NVMe SSD providing lightning-fast storage access",
      "15.6-inch 4K OLED display with HDR support and 100% DCI-P3 color gamut",
      "Ultra-thin aluminum unibody design weighing only 3.5 pounds",
      "Advanced cooling system with dual fans and heat pipes",
      "Backlit keyboard with 1.5mm key travel for comfortable typing",
      "Up to 12 hours of battery life for all-day productivity",
      "Thunderbolt 4, USB-C, and HDMI ports for versatile connectivity",
      "AI-enhanced webcam with 1080p resolution and noise cancellation"
    ],
    options: [
      {
        name: "Color",
        values: ["Space Gray", "Silver", "Matte Black"]
      },
      {
        name: "Memory",
        values: ["16GB", "32GB", "64GB"]
      },
      {
        name: "Storage",
        values: ["512GB SSD", "1TB SSD", "2TB SSD"]
      }
    ],
    stock: 15,
    sku: "UB-PRO-X15-12900K",
  };

  // Customer reviews data
  const reviewsData = {
    overallRating: 4.7,
    totalReviews: 247,
    ratingBreakdown: {
      5: 175,
      4: 53,
      3: 12,
      2: 5,
      1: 2
    },
    reviews: [
      {
        id: 1,
        author: "Michael P.",
        date: "June 12, 2023",
        rating: 5,
        title: "The best laptop I've ever owned!",
        content: "I've been using the Ultrabook Pro X15 for about a month now, and I'm thoroughly impressed. The build quality is exceptional, the screen is gorgeous, and the performance is blazing fast. I can run multiple virtual machines, development environments, and design software simultaneously without any lag. Highly recommended for professionals!",
        helpful: 43,
        unhelpful: 2,
        verified: true
      },
      {
        id: 2,
        author: "Sarah K.",
        date: "May 28, 2023",
        rating: 4,
        title: "Great performance, slightly warm under heavy load",
        content: "This laptop is incredibly powerful and handles everything I throw at it with ease. The display is stunning and color-accurate, which is perfect for my photography work. My only complaint is that it gets quite warm during extended rendering sessions. Otherwise, it's nearly perfect!",
        helpful: 27,
        unhelpful: 3,
        verified: true
      },
      {
        id: 3,
        author: "David M.",
        date: "April 15, 2023",
        rating: 5,
        title: "Worth every penny",
        content: "After upgrading from my 5-year-old laptop, the difference is night and day. Everything is lightning fast, the display is phenomenal, and the battery actually lasts all day as advertised. The build quality feels premium and the keyboard is a joy to type on. It's expensive, but you get what you pay for.",
        helpful: 19,
        unhelpful: 1,
        verified: true
      }
    ]
  };

  // Related products data
  const relatedProducts = [
    {
      id: "prod-123457",
      name: "Ultrabook Pro X13 - Intel Core i7, 16GB RAM, 512GB SSD",
      price: 1799.99,
      discountedPrice: 1599.99,
      rating: 4.5,
      reviewCount: 187,
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      isNew: true
    },
    {
      id: "prod-123458",
      name: "Ultrabook Air - Intel Core i5, 8GB RAM, 256GB SSD",
      price: 1299.99,
      rating: 4.3,
      reviewCount: 320,
      image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      isBestSeller: true
    },
    {
      id: "prod-123459",
      name: "Ultrabook Gaming Edition - AMD Ryzen 9, 32GB RAM, 1TB SSD, RTX 4080",
      price: 2899.99,
      discountedPrice: 2699.99,
      rating: 4.8,
      reviewCount: 142,
      image: "https://images.unsplash.com/photo-1603481546238-487170595ad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "prod-123460",
      name: "Ultrabook Pro Max - Intel Core i9, 64GB RAM, 2TB SSD",
      price: 3199.99,
      rating: 4.9,
      reviewCount: 76,
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      isNew: true
    }
  ];

  // Breadcrumb data
  const breadcrumbItems = [
    { name: "Electronics", href: "#" },
    { name: "Laptops", href: "#" },
    { name: "Ultrabooks", href: "#" },
    { name: "Ultrabook Pro X15", href: "#" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <ProductBreadcrumb items={breadcrumbItems} />
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <ProductGallery images={productImages} />
            <ProductDetails product={productData} />
          </div>
        </div>
        
        <CustomerReviews 
          overallRating={reviewsData.overallRating}
          totalReviews={reviewsData.totalReviews}
          ratingBreakdown={reviewsData.ratingBreakdown}
          reviews={reviewsData.reviews}
        />
        
        <RelatedProducts products={relatedProducts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
