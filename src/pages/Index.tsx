
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck, Award, Users, ArrowRight, Play } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Index = () => {
  const [email, setEmail] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png",
      title: "Unbox the Legends",
      subtitle: "Superman Premium Figure - Now Available",
      cta: "Shop Now",
      link: "/product/1"
    },
    {
      image: "/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png",
      title: "Legends Arrive Soon",
      subtitle: "New Heroes Coming Your Way",
      cta: "Notify Me",
      link: "/products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing! We\'ll notify you about new releases.');
    setEmail('');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-orange-50/30 to-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-orange-100/50 shadow-lg z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                  alt="Saikou Logo" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900">Saikou</span>
                  <span className="text-xs text-orange-600 font-medium tracking-wide">Made in India</span>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-orange-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-600">
                  Home
                </Link>
                <Link to="/products" className="text-slate-700 font-medium hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full">
                  Products
                </Link>
                <Link to="/about-us" className="text-slate-700 font-medium hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full">
                  About Us
                </Link>
                <Link to="/contact-us" className="text-slate-700 font-medium hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full">
                  Contact
                </Link>
                <Link to="/my-account" className="text-slate-700 font-medium hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full">
                  Account
                </Link>
                <Link to="/cart" className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2.5 rounded-full hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Cart (0)
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Slideshow Banner */}
        <section className="pt-20 relative overflow-hidden">
          <div className="relative h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="container mx-auto px-6 h-full flex items-center">
                  <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    <div className="space-y-6 text-white">
                      <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl lg:text-2xl text-orange-100 font-light">
                        {slide.subtitle}
                      </p>
                      <Link
                        to={slide.link}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl"
                      >
                        {slide.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-3xl"></div>
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full max-w-lg mx-auto relative z-10 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Sculpted with Love. <span className="text-orange-600">And Way Too Much Time.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Saikou, we obsess over every detail—so you don't have to. Our collectible action figures are inspired by anime, 
                superheroes, gaming legends, and mythical icons, all proudly designed and crafted in India. Whether you're a collector, 
                a fan, or just looking for a gift that screams "I nailed it," we've got your shelf covered. Expect premium quality, 
                epic characters, and the kind of finish that makes people say: "Wait, that's Made in India?"
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
              >
                Read Our Story
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Collections Showcase */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Collections</h2>
              <p className="text-slate-600 text-lg">Two styles. One obsession. Your fandom wins.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Saikou Collection */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">S</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Saikou Collection</h3>
                  <p className="text-slate-600">
                    Our flagship collection of full-sized, high-quality action figures—designed for fans who want more than just a toy. 
                    Dynamic poses, detailed bases, and premium finishes that turn heads and spark conversations.
                  </p>
                  <Link
                    to="/products?collection=saikou"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-700 hover:to-orange-600 transition-all group-hover:scale-105"
                  >
                    Explore Saikou
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Ikon Collection */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">I</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Ikon Collection</h3>
                  <p className="text-slate-600">
                    Premium bust-style collectible figures that deliver high-impact character presence in a compact, display-friendly format. 
                    Sharp detailing and bold style that captures the essence of your favorite heroes.
                  </p>
                  <Link
                    to="/products?collection=ikon"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:from-slate-800 hover:to-slate-900 transition-all group-hover:scale-105"
                  >
                    Explore Ikon
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Shield, 
                  title: "Made Here. Not Meh.", 
                  desc: "Proudly made in India with global-quality standards—no shady imports, no 60-day waits." 
                },
                { 
                  icon: Star, 
                  title: "Details So Good, It's Rude.", 
                  desc: "From facial expressions to fabric folds, we obsess over every pixel and pose." 
                },
                { 
                  icon: Award, 
                  title: "For Collectors, Not Kids.", 
                  desc: "Display-worthy, conversation-starting, flex-on-your-friends-level collectibles." 
                },
                { 
                  icon: Truck, 
                  title: "Gift It. Brag About It.", 
                  desc: "Our figures make unforgettable, shelf-stealing gifts for any fan." 
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center space-y-4 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-slate-900">Join the Saikou Community</h2>
                <p className="text-lg text-slate-600">
                  💬 Where figurine fans unite! Be the first to get drop alerts, vote on future characters, 
                  share ideas, and get behind-the-scenes peeks. No spam. Just sculpts, chaos, and collector-level fun.
                </p>
              </div>
              
              <a
                href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-xl"
              >
                <Users className="w-6 h-6" />
                Join WhatsApp Community
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Your Suggestions > Our Sleep Schedule.</h2>
              <p className="text-slate-300 mb-8">
                Get notified about new releases, exclusive drops, and special offers. Help us make cooler stuff.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 px-6 py-4 rounded-full border-0 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-700 hover:to-orange-600 transition-all shadow-lg"
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
