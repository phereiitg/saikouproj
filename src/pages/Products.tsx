import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [cart, setCart] = useState<Array<{id: string, name: string, price: string}>>([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const addToCart = (productId: string, productName: string, productPrice: string) => {
    const newItem = { id: productId, name: productName, price: productPrice };
    setCart(prev => [...prev, newItem]);
    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const allProducts = [
    {
      id: '1',
      name: 'Superman Premium Action Figure',
      price: '₹4,999',
      image: '/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png',
      badge: 'Premium',
      collection: 'Saikou Collection',
      description: 'Strike a pose with the Last Son of Krypton! This Man of Steel action figure by Saikou is a full-sized, high-detail collectible built for bold shelves and true fans.'
    },
    {
      id: '2', 
      name: 'Hulk Patreon Edition Statue',
      price: '₹6,499',
      image: '/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png',
      badge: 'Limited',
      collection: 'Saikou Collection',
      description: 'Unleash the incredible power with this exclusive Hulk statue. Limited edition collectible featuring dynamic pose and premium finish.'
    },
    {
      id: '3',
      name: 'Anime Warrior Dark Edition',
      price: '₹5,999', 
      image: '/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png',
      badge: 'Exclusive',
      collection: 'Ikon Collection',
      description: 'Bring your favorite anime character to life with this detailed premium figure. Perfect for collectors and anime enthusiasts.'
    },
    {
      id: '4',
      name: 'Batman Dark Knight Figure',
      price: '₹4,799',
      image: '/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png',
      badge: 'New',
      collection: 'Saikou Collection',
      description: 'The Dark Knight rises again in this stunning collectible figure featuring incredible detail and dynamic pose.'
    },
    {
      id: '5',
      name: 'Iron Man Mark 50',
      price: '₹7,299',
      image: '/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png',
      badge: 'Premium',
      collection: 'Saikou Collection',
      description: 'Tony Stark\'s most advanced armor comes to life in this meticulously crafted collectible figure.'
    },
    {
      id: '6',
      name: 'Naruto Hokage Edition',
      price: '₹3,799',
      image: '/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png',
      badge: 'Popular',
      collection: 'Ikon Collection',
      description: 'The Seventh Hokage in all his glory, perfect for any anime collection.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                alt="Saikou Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-space-grotesk font-bold text-saikou-secondary">Saikou</span>
                <span className="text-xs text-gray-500 font-darker-grotesque font-medium -mt-1">Made in India</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saikou-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/products" className="text-saikou-accent font-darker-grotesque font-medium relative">
                Products
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
              </Link>
              <Link to="/my-account" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors relative group">
                My Account
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saikou-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span>🛒</span>
                <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Products Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-saikou-background via-white to-saikou-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
              Our Complete Collection
            </h1>
            <p className="text-xl font-darker-grotesque text-gray-600 max-w-2xl mx-auto">
              Discover all our premium collectible action figures, from anime heroes to superhero legends.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full mt-6"></div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                <div className="relative h-80">
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
                  <h3 className="text-xl font-space-grotesk font-semibold mb-2 text-saikou-secondary">{product.name}</h3>
                  <p className="text-sm font-darker-grotesque text-gray-500 mb-2">{product.collection}</p>
                  <p className="text-gray-600 font-darker-grotesque mb-4 text-sm">{product.description}</p>
                  <p className="text-2xl font-space-grotesk font-bold text-saikou-accent mb-4">{product.price}</p>
                  <div className="flex gap-2">
                    <Link 
                      to={`/product/${product.id}`}
                      className="flex-1 bg-saikou-background text-saikou-secondary py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary hover:scale-105 transition-all duration-300 text-center"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => addToCart(product.id, product.name, product.price)}
                      className="flex-1 bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
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
                className="flex-1 px-4 py-3 rounded-lg text-saikou-secondary font-darker-grotesque border-2 border-transparent focus:border-saikou-primary transition-all duration-300"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
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
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Products;
