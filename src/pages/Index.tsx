
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Star,
  Shield,
  Truck,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState<Array<{id: string, name: string, price: string}>>([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Superman Premium Action Figure",
      subtitle: "Strike a pose with the Last Son of Krypton!",
      description: "This Man of Steel action figure by Saikou is a full-sized, high-detail collectible built for bold shelves and true fans.",
      price: "₹4,999",
      image: "/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png",
      badge: "Premium",
      collection: "Saikou Collection"
    },
    {
      id: 2,
      title: "Hulk Patreon Edition Statue",
      subtitle: "Unleash the incredible power!",
      description: "This exclusive Hulk statue features dynamic pose and premium finish. Limited edition collectible for true Marvel fans.",
      price: "₹6,499",
      image: "/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png",
      badge: "Limited",
      collection: "Saikou Collection"
    },
    {
      id: 3,
      title: "Anime Warrior Dark Edition",
      subtitle: "Bring your favorite anime character to life!",
      description: "Detailed premium figure perfect for collectors and anime enthusiasts. Features incredible attention to detail.",
      price: "₹5,999",
      image: "/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png",
      badge: "Exclusive",
      collection: "Ikon Collection"
    }
  ];

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
    },
    {
      id: '4',
      name: 'Batman Dark Knight Figure',
      price: '₹4,799',
      image: '/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png',
      badge: 'New',
      collection: 'Saikou Collection'
    }
  ];

  const addToCart = (productId: string, productName: string, productPrice: string) => {
    const newItem = { id: productId, name: productName, price: productPrice };
    setCart(prev => [...prev, newItem]);
    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                    alt="Saikou Logo" 
                    className="h-16 w-auto"
                  />
                  <span className="text-xs text-gray-500 font-darker-grotesque font-medium -mt-1">Made in India</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-saikou-accent font-darker-grotesque font-medium relative">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
                </Link>
                <Link to="/products" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Products
                </Link>
                <Link to="/my-account" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  My Account
                </Link>
                <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover:shadow-lg transition-all">
                  <span>🛒</span>
                  <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {cart.length}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Slideshow */}
        <section className="pt-24 bg-gradient-to-br from-saikou-background via-white to-saikou-background relative overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full absolute inset-0'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                    <div className="space-y-8">
                      <div className="inline-block bg-gradient-to-r from-saikou-accent to-saikou-primary text-white px-4 py-2 rounded-full text-sm font-darker-grotesque font-semibold">
                        {slide.badge} • {slide.collection}
                      </div>
                      <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold leading-tight bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
                        {slide.title}
                      </h1>
                      <p className="text-xl font-darker-grotesque text-gray-600 leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex items-center gap-6">
                        <span className="text-3xl font-space-grotesk font-bold text-saikou-accent">
                          {slide.price}
                        </span>
                        <div className="flex gap-3">
                          <Link 
                            to={`/product/${slide.id}`}
                            className="bg-saikou-background text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all"
                          >
                            View Details
                          </Link>
                          <button 
                            onClick={() => addToCart(slide.id.toString(), slide.title, slide.price)}
                            className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-saikou-primary/20 to-saikou-accent/20 rounded-2xl transform rotate-3"></div>
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="relative z-10 w-full max-w-md mx-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6 text-saikou-secondary" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all z-10"
              >
                <ChevronRight className="w-6 h-6 text-saikou-secondary" />
              </button>
              
              {/* Slide indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-saikou-accent scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-saikou-background/30 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                    Who We Are
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-600 font-darker-grotesque text-lg leading-relaxed">
                  <p>
                    <strong className="text-saikou-accent">Saikou</strong> represents the pinnacle of collectible action figures in India. We craft premium, high-detail collectibles that bring your favorite characters to life with unmatched quality and attention to detail.
                  </p>
                  
                  <p>
                    Our <strong className="text-saikou-accent">Ikon Collection</strong> features carefully curated anime and manga figures, while our <strong className="text-saikou-accent">Saikou Collection</strong> showcases legendary superheroes and pop culture icons.
                  </p>
                  
                  <p>
                    Every piece is designed for collectors who demand excellence - from the dynamic poses to the premium finishes that make each figure a true work of art.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-saikou-background to-white rounded-xl shadow-lg">
                    <div className="text-3xl font-space-grotesk font-bold text-saikou-accent mb-2">500+</div>
                    <div className="text-sm font-darker-grotesque text-gray-600">Happy Collectors</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-saikou-background to-white rounded-xl shadow-lg">
                    <div className="text-3xl font-space-grotesk font-bold text-saikou-accent mb-2">50+</div>
                    <div className="text-sm font-darker-grotesque text-gray-600">Premium Figures</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                      alt="Saikou Brand"
                      className="w-full rounded-xl shadow-lg"
                    />
                    <img 
                      src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" 
                      alt="Premium Figure"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img 
                      src="/lovable-uploads/adb51653-88fb-466e-847a-c336186d8603.png" 
                      alt="Ikon Brand"
                      className="w-full rounded-xl shadow-lg"
                    />
                    <img 
                      src="/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png" 
                      alt="Anime Figure"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Saikou Section - with animations */}
        <section className="py-20 bg-gradient-to-br from-saikou-background to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                Why Choose Saikou?
              </h2>
              <p className="text-xl font-darker-grotesque text-gray-600 max-w-2xl mx-auto">
                Experience the difference with premium quality, authentic designs, and exceptional attention to detail.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Star, title: "Premium Quality", desc: "Highest quality materials and craftsmanship in every piece" },
                { icon: Shield, title: "Authentic Designs", desc: "Officially licensed and carefully detailed replicas" },
                { icon: Truck, title: "Fast Delivery", desc: "Quick and secure shipping across India" },
                { icon: Heart, title: "Made in India", desc: "Proudly crafted in India with love and precision" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-saikou-primary to-saikou-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-saikou-secondary" />
                  </div>
                  <h3 className="text-xl font-space-grotesk font-semibold mb-3 text-saikou-secondary group-hover:text-saikou-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-darker-grotesque text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
                Featured Collections
              </h2>
              <p className="text-xl font-darker-grotesque text-gray-600 max-w-2xl mx-auto">
                Discover our most popular premium action figures and collectibles.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-saikou-accent to-saikou-primary text-white px-3 py-1 rounded-full text-sm font-darker-grotesque font-semibold shadow-lg">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-space-grotesk font-semibold mb-2 text-saikou-secondary">
                      {product.name}
                    </h3>
                    <p className="text-sm font-darker-grotesque text-gray-500 mb-4">{product.collection}</p>
                    <p className="text-xl font-space-grotesk font-bold text-saikou-accent mb-4">{product.price}</p>
                    <div className="flex gap-2">
                      <Link 
                        to={`/product/${product.id}`}
                        className="flex-1 bg-saikou-background text-saikou-secondary py-2 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all text-center"
                      >
                        View
                      </Link>
                      <button 
                        onClick={() => addToCart(product.id, product.name, product.price)}
                        className="flex-1 bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary py-2 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/products" 
                className="inline-block bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-br from-saikou-secondary to-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-saikou-accent/10 to-saikou-primary/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">Stay Updated</h2>
              <p className="font-darker-grotesque text-lg mb-8 opacity-90">
                Get notified about new releases and exclusive offers!
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-saikou-secondary font-darker-grotesque border-2 border-transparent focus:border-saikou-primary transition-all"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gradient-to-br from-saikou-secondary to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-6 md:mb-0 flex items-center gap-3">
                <img 
                  src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                  alt="Saikou Logo" 
                  className="h-8 w-auto filter brightness-0 invert"
                />
                <div>
                  <p className="font-darker-grotesque opacity-80">Premium collectibles. Made in India.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Home</Link>
                <Link to="/products" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Products</Link>
                <a href="mailto:info@saikoushop.com" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Support</a>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-gray-600">
              <p className="font-darker-grotesque opacity-60">&copy; 2024 Saikou. All rights reserved. Proudly made in India.</p>
            </div>
          </div>
        </footer>

        {/* Cart Notification */}
        {showCartNotification && (
          <div className="fixed top-24 right-4 bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-3 rounded-lg shadow-lg z-50 font-darker-grotesque font-semibold">
            <div className="flex items-center gap-2">
              <span>🎉</span>
              Item added to cart!
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Index;
