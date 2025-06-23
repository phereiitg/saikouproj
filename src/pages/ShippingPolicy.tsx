
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Truck, Clock, MapPin } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-saikou-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-saikou-border shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-4 hover-scale">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                    alt="Saikou Logo" 
                    className="h-16 w-auto"
                  />
                  <span className="text-xs text-saikou-text font-darker-grotesque font-medium -mt-1">Made in India</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Products
                </Link>
                <Link to="/about-us" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  About Us
                </Link>
                <Link to="/contact-us" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  Contact Us
                </Link>
                <Link to="/my-account" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  My Account
                </Link>
                <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover-lift">
                  <span>🛒</span>
                  <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">0</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Content */}
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Truck className="w-8 h-8 text-saikou-accent" />
                <h1 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">Shipping Policy</h1>
              </div>
              
              <div className="bg-saikou-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm font-darker-grotesque text-saikou-text">
                  <strong>Last Updated:</strong> December 23, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none font-darker-grotesque text-saikou-text">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-saikou-accent-light p-6 rounded-lg text-center">
                    <Clock className="w-8 h-8 text-saikou-accent mx-auto mb-3" />
                    <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Processing Time</h3>
                    <p className="text-sm">7 business days</p>
                  </div>
                  <div className="bg-saikou-accent-light p-6 rounded-lg text-center">
                    <MapPin className="w-8 h-8 text-saikou-accent mx-auto mb-3" />
                    <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Metro Cities</h3>
                    <p className="text-sm">3-6 working days</p>
                  </div>
                  <div className="bg-saikou-accent-light p-6 rounded-lg text-center">
                    <MapPin className="w-8 h-8 text-saikou-accent mx-auto mb-3" />
                    <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2">Non-Metro Areas</h3>
                    <p className="text-sm">5-10 working days</p>
                  </div>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Dispatch Time</h2>
                <p className="mb-6">
                  Orders are usually processed within 7 business days, excluding weekends and public holidays. Considering Our products inclusive of Exclusive Orders, custom made, or hand-painted items may require additional time which will be communicated through the Website at the time of placing the Order.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Shipping Partners</h2>
                <p className="mb-6">
                  We ship across India through Our trusted courier partners. A tracking link will be provided via email and/or WhatsApp once the order is dispatched.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Delivery Timelines</h2>
                <p className="mb-4">Estimated delivery time post-dispatch:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Metro Cities:</strong> 3–6 working days</li>
                  <li><strong>Non-Metro Areas:</strong> 5–10 working days</li>
                </ul>
                <p className="mb-6">
                  Please note that these are estimates only and the same may vary depending on the Ordered items, delivery addresses, availability of the product, etc.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Tracking & Delivery</h2>
                <p className="mb-6">
                  You'll be notified upon dispatch. If your parcel is delayed or lost after dispatch, please contact and notify our Support team at care@saikoushop.com
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Incomplete / Incorrect Address</h2>
                <p className="mb-6">
                  If the address provided by the User is incorrect or incomplete, delivery may fail. We are not liable for delays or losses arising from incorrect information.
                </p>

                <div className="bg-saikou-accent-light p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary mb-2">Need Help?</h3>
                  <p className="mb-2">
                    For any shipping-related queries, please contact our support team:
                  </p>
                  <p className="text-saikou-accent font-semibold">care@saikoushop.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-saikou-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Explore</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Home</Link></li>
                  <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shop Saikou</Link></li>
                  <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shop Ikon</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-space-grotesk font-semibold mb-4">Saikou</h4>
                <ul className="space-y-2 font-darker-grotesque">
                  <li><Link to="/about-us" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">About Us</Link></li>
                  <li><Link to="/contact-us" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Contact Us</Link></li>
                  <li><Link to="/shipping-policy" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Shipping Policy</Link></li>
                  <li><Link to="/returns-refunds" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Returns & FAQ</Link></li>
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
                  <li><Link to="/cookie-policy" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Cookie Policy</Link></li>
                  <li><Link to="/privacy-policy" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-gray-600">
              <p className="font-darker-grotesque opacity-60">&copy; 2024 Saikou Figures. Made with ✨ in India.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default ShippingPolicy;
