
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing! We\'ll notify you about new releases.');
    setEmail('');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-sm z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                  alt="Saikou Logo" 
                  className="h-12 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900">Saikou</span>
                  <span className="text-xs text-orange-600 font-medium">Made in India</span>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-orange-600 font-medium border-b-2 border-orange-600 pb-1">
                  Home
                </Link>
                <Link to="/products" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Products
                </Link>
                <Link to="/about-us" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  About Us
                </Link>
                <Link to="/contact-us" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Contact
                </Link>
                <Link to="/my-account" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Account
                </Link>
                <Link to="/cart" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors flex items-center gap-2">
                  Cart (0)
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Premium
                    <span className="text-orange-600 block">Collectibles</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Handcrafted action figures and collectibles. Made in India with precision and passion.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/products"
                    className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Shop Collection
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/about-us"
                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8">
                  <img 
                    src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" 
                    alt="Premium Collectible" 
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Premium Quality", desc: "Handcrafted with precision" },
                { icon: Award, title: "Made in India", desc: "Proudly manufactured locally" },
                { icon: Truck, title: "Fast Delivery", desc: "Quick and secure shipping" },
                { icon: Star, title: "Limited Edition", desc: "Exclusive collectibles" }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Collections</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover our premium range of collectible action figures, from anime legends to comic heroes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Saikou Series</h3>
                <p className="text-slate-600 mb-6">Premium action figures with dynamic poses and detailed bases.</p>
                <Link 
                  to="/products"
                  className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-2"
                >
                  Explore Collection
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ikon Series</h3>
                <p className="text-slate-600 mb-6">Elegant bust-style statues with clean design and strong character presence.</p>
                <Link 
                  to="/products"
                  className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center gap-2"
                >
                  Explore Collection
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl p-8">
                  <img 
                    src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" 
                    alt="Superman Premium Figure" 
                    className="w-full max-w-md mx-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-slate-900">Superman Premium Figure</h2>
                  <p className="text-slate-600 text-lg">
                    Experience the Man of Steel like never before. Dynamic cape flow, volcanic base, and museum-quality craftsmanship.
                  </p>
                  <div className="text-2xl font-bold text-orange-600">₹4,999</div>
                </div>
                
                <div className="flex gap-4">
                  <Link 
                    to="/product/1"
                    className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-slate-300 mb-8">
                Get notified about new releases, exclusive drops, and special offers.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 px-4 py-3 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
                />
                <button 
                  type="submit"
                  className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                    alt="Saikou Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-bold">Saikou</span>
                </div>
                <p className="text-slate-400">Premium collectibles made in India</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Explore</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                  <li><Link to="/products" className="hover:text-orange-400 transition-colors">Products</Link></li>
                  <li><Link to="/about-us" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                  <li><Link to="/contact-us" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/shipping-policy" className="hover:text-orange-400 transition-colors">Shipping Policy</Link></li>
                  <li><Link to="/returns-refunds" className="hover:text-orange-400 transition-colors">Returns & Refunds</Link></li>
                  <li><Link to="/my-account" className="hover:text-orange-400 transition-colors">My Account</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Legal</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
                  <li><Link to="/cookie-policy" className="hover:text-orange-400 transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-slate-800">
              <p className="text-slate-400">&copy; 2025 Saikou. Made with ❤️ in India.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
