
import { Link } from 'react-router-dom';
import { MessageSquare, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const AboutUs = () => {
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
                <Link to="/" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Products
                </Link>
                <Link to="/about-us" className="text-saikou-accent font-darker-grotesque font-medium relative">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
                </Link>
                <Link to="/contact-us" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Contact Us
                </Link>
                <Link to="/my-account" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  My Account
                </Link>
                <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover:shadow-lg transition-all">
                  <span>🛒</span>
                  <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">0</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-saikou-background via-white to-saikou-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold mb-6 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
                Behind the Shelf
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-6 text-gray-700 font-darker-grotesque text-lg leading-relaxed">
                  <p>
                    <strong className="text-saikou-accent">Saikou was born from a mix of passion and frustration.</strong> As fans, we wanted premium figures—but got overpriced imports with underwhelming quality.
                  </p>
                  
                  <p>
                    So we built what we couldn't find: <strong className="text-saikou-secondary">display-worthy, India-made action figures</strong> for anime, superhero, and gaming lovers.
                  </p>
                  
                  <p>
                    We're <strong className="text-saikou-accent">fans first. Makers second.</strong> Welcome to Saikou—where details matter, and every sculpt tells a story.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/products"
                    className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all text-center"
                  >
                    Meet the Collection
                  </Link>
                  <a 
                    href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-saikou-background border-2 border-saikou-primary text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all text-center flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Join Our Community
                  </a>
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
                <div className="absolute inset-0 bg-gradient-to-r from-saikou-primary/10 to-saikou-accent/10 rounded-2xl -z-10 transform rotate-3"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Made in India Badge Section */}
        <section className="py-16 bg-gradient-to-br from-saikou-background to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg">
                <span className="text-4xl">🇮🇳</span>
                <div className="text-left">
                  <h3 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-2">Made in India</h3>
                  <p className="font-darker-grotesque text-gray-600">Crafted with pride, precision, and passion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gradient-to-br from-saikou-secondary to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Home</Link></li>
                  <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shop Saikou</Link></li>
                  <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shop Ikon</Link></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Saikou</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/about-us" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">About Us</Link></li>
                  <li><Link to="/contact-us" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Contact Us</Link></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shipping Policy</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Returns & FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Community</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><a href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Join WhatsApp Group</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Instagram</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">YouTube</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Cookie Policy</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Privacy Policy</a></li>
                  <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-gray-600">
              <p className="font-darker-grotesque opacity-60">&copy; 2025 Saikou Figures. Made with ✨ in India.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default AboutUs;
