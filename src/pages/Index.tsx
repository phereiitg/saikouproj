
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [cart, setCart] = useState<Array<{id: string, name: string, price: string}>>([]);
  const [cartCount, setCartCount] = useState(0);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const addToCart = (productId: string, productName: string, productPrice: string) => {
    const newItem = { id: productId, name: productName, price: productPrice };
    setCart(prev => [...prev, newItem]);
    setCartCount(prev => prev + 1);
    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProducts = [
    {
      id: '1',
      name: 'Superman Premium Action Figure',
      price: '₹4,999',
      image: '/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png',
      badge: 'Premium',
      collection: 'Saikou Collection'
    },
    {
      id: '2', 
      name: 'Hulk Patreon Edition Statue',
      price: '₹6,499',
      image: '/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png',
      badge: 'Limited',
      collection: 'Saikou Collection'
    },
    {
      id: '3',
      name: 'Anime Warrior Dark Edition',
      price: '₹5,999', 
      image: '/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png',
      badge: 'Exclusive',
      collection: 'Ikon Collection'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col">
              <h1 className="text-2xl font-space-grotesk font-bold text-saikou-secondary">Saikou</h1>
              <span className="text-xs text-gray-600 font-darker-grotesque font-medium -mt-1">Made in India</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('collections')} className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                Collections
              </button>
              <button onClick={() => scrollToSection('about')} className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                Contact
              </button>
              <Link to="/cart" className="bg-saikou-primary text-saikou-secondary px-4 py-2 rounded-lg flex items-center gap-2 font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                <span>🛒</span>
                <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Slideshow Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-saikou-background to-white">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-6xl mx-auto mb-16">
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px] bg-white rounded-2xl shadow-xl p-8">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <span className="inline-block bg-saikou-accent text-white px-4 py-2 rounded-full text-sm font-darker-grotesque font-semibold">
                          {product.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-saikou-secondary leading-tight">
                          {product.name}
                        </h2>
                        <p className="text-xl text-gray-600 font-darker-grotesque">
                          Premium collectible figure from our {product.collection}
                        </p>
                        <p className="text-3xl font-space-grotesk font-bold text-saikou-accent">
                          {product.price}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          to={`/product/${product.id}`}
                          className="bg-saikou-primary text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all text-center"
                        >
                          View Details
                        </Link>
                        <button 
                          onClick={() => addToCart(product.id, product.name, product.price)}
                          className="border-2 border-saikou-primary text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
              Sculpted with Love. And Way Too Much Time.
            </h1>
            <p className="text-xl font-darker-grotesque text-gray-600 mb-8">
              Premium collectible action figures inspired by anime, superheroes, gaming legends, and mythical icons. Proudly designed and crafted in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('collections')}
                className="bg-saikou-primary text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all"
              >
                Explore Collections
              </button>
              <button 
                onClick={() => scrollToSection('featured-products')}
                className="border-2 border-saikou-primary text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all"
              >
                New Arrivals
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-space-grotesk font-semibold mb-4 text-saikou-secondary">Made Here. Not Meh.</h3>
              <p className="font-darker-grotesque text-gray-600">Proudly made in India with global-quality standards</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-space-grotesk font-semibold mb-4 text-saikou-secondary">Details So Good, It's Rude.</h3>
              <p className="font-darker-grotesque text-gray-600">From facial expressions to fabric folds, we obsess over every pixel</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-space-grotesk font-semibold mb-4 text-saikou-secondary">For Collectors, Not Kids.</h3>
              <p className="font-darker-grotesque text-gray-600">Display-worthy, conversation-starting collectibles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space-grotesk font-bold text-center mb-12 text-saikou-secondary">Our Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-saikou-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 text-saikou-secondary">Saikou</h3>
              <p className="font-darker-grotesque text-gray-600 mb-6 leading-relaxed">
                Our flagship collection of full-sized, high-quality action figures—designed for fans who want more than just a toy. From anime action figures and superhero statues to gaming collectibles and legendary characters.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Full-Size Glory</span>
                <span className="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Dynamic Poses</span>
                <span className="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Premium Finishes</span>
              </div>
            </div>
            <div className="bg-saikou-background p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-space-grotesk font-semibold mb-4 text-saikou-secondary">Ikon</h3>
              <p className="font-darker-grotesque text-gray-600 mb-6 leading-relaxed">
                Our exclusive collection of premium bust-style collectible figures—designed to deliver high-impact character presence in a compact, display-friendly format. Perfect for collectors, desk displays, or gifting.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Bust-Style</span>
                <span className="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Compact Display</span>
                <span className="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Bold Style</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-16 bg-saikou-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space-grotesk font-bold text-center mb-12 text-saikou-secondary">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-4 right-4 bg-saikou-accent text-white px-3 py-1 rounded-full text-sm font-darker-grotesque font-semibold">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-space-grotesk font-semibold mb-2 text-saikou-secondary">{product.name}</h3>
                  <p className="text-sm font-darker-grotesque text-gray-500 mb-2">{product.collection}</p>
                  <p className="text-2xl font-space-grotesk font-bold text-saikou-accent mb-4">{product.price}</p>
                  <div className="flex gap-2">
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex-1 bg-saikou-background text-saikou-secondary py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all text-center"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => addToCart(product.id, product.name, product.price)}
                      className="flex-1 bg-saikou-primary text-saikou-secondary py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-space-grotesk font-bold text-center mb-12 text-saikou-secondary">Who We Are</h2>
            <div className="space-y-6 font-darker-grotesque text-gray-600 leading-relaxed">
              <p className="text-lg font-medium text-saikou-secondary">
                At Saikou, we're not just making action figures—we're bringing your favorite characters to life, one sculpt at a time.
              </p>
              <p>
                Born out of pure fandom and frustration (ever paid way too much for a flimsy imported figure?) Saikou was created to give Indian fans the quality they deserve—without the wait, the customs drama, or the disappointing paint jobs.
              </p>
              <p>
                From anime action figures and superhero collectibles to gaming icons and mythical legends, everything we make is built with care, crafted in India, and designed to look damn good on your shelf. Whether you're a serious collector or just searching for the perfect gift, we make characters that feel personal—and figures that feel premium.
              </p>
              <p className="italic">
                We sweat the small stuff. We obsess over details. And yes, we take way too long perfecting things. But that's what happens when you're fans first, makers second.
              </p>
              <div className="bg-saikou-primary p-6 rounded-lg text-center">
                <p className="font-space-grotesk font-semibold text-saikou-secondary">
                  Welcome to Saikou. Collectibles that actually live up to the hype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-saikou-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-space-grotesk font-bold mb-4">Help Us Make Cooler Stuff</h2>
            <p className="font-darker-grotesque text-lg mb-8 opacity-90">
              New figurines loading... Smash that "Notify Me" button like it owes you money!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="flex-1 px-4 py-3 rounded-lg text-saikou-secondary font-darker-grotesque"
              />
              <button 
                type="submit"
                className="bg-saikou-primary text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-saikou-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-space-grotesk font-bold text-center mb-12 text-saikou-secondary">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Company</h3>
                  <p className="font-darker-grotesque text-gray-600">Saikou</p>
                </div>
                <div>
                  <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Phone</h3>
                  <p className="font-darker-grotesque text-gray-600">92742 38391</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Email</h3>
                  <p className="font-darker-grotesque text-gray-600">
                    <a href="mailto:info@saikoushop.com" className="hover:text-saikou-accent transition-colors">info@saikoushop.com</a><br/>
                    <a href="mailto:care@saikoushop.com" className="hover:text-saikou-accent transition-colors">care@saikoushop.com</a> (Customer care)
                  </p>
                </div>
                <div>
                  <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Location</h3>
                  <p className="font-darker-grotesque text-gray-600">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-saikou-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-space-grotesk font-bold">Saikou</h3>
              <p className="font-darker-grotesque opacity-80">Premium collectibles. Made in India.</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <button onClick={() => scrollToSection('collections')} className="font-darker-grotesque opacity-80 hover:opacity-100 transition-opacity">Collections</button>
              <button onClick={() => scrollToSection('about')} className="font-darker-grotesque opacity-80 hover:opacity-100 transition-opacity">About</button>
              <button onClick={() => scrollToSection('contact')} className="font-darker-grotesque opacity-80 hover:opacity-100 transition-opacity">Contact</button>
              <a href="mailto:info@saikoushop.com" className="font-darker-grotesque opacity-80 hover:opacity-100 transition-opacity">Support</a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="font-darker-grotesque opacity-60">&copy; 2024 Saikou. All rights reserved. Proudly made in India.</p>
          </div>
        </div>
      </footer>

      {/* Cart Notification */}
      {showCartNotification && (
        <div className="fixed top-24 right-4 bg-saikou-primary text-saikou-secondary px-6 py-3 rounded-lg shadow-lg z-50 font-darker-grotesque font-semibold">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Index;
