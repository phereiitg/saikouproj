
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Cookie, Settings, Eye } from 'lucide-react';

const CookiePolicy = () => {
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
                <Cookie className="w-8 h-8 text-saikou-accent" />
                <h1 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">Cookie Policy</h1>
              </div>
              
              <div className="bg-saikou-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm font-darker-grotesque text-saikou-text">
                  <strong>Last Updated:</strong> December 23, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none font-darker-grotesque text-saikou-text">
                <p className="text-lg leading-relaxed mb-6">
                  At SAIKOU ("We", "Our", "Us"), We value transparency and Your privacy. This Cookie Policy statement explains how and why cookies and similar technologies are used when You visit or interact with Our Website www.saikoushop.com ("Website").
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">What Are Cookies?</h2>
                <p className="mb-6">
                  Cookies are small text files that are stored on your browser or device when you visit a website. They help the website remember information about your visit, enhance performance, and personalize your experience. Cookies can be Third-party cookies or services integrated via the platform (e.g., payment gateways, analytics tools, social plugins).
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Types of Cookies We Use</h2>
                <p className="mb-4">Our Website, custom built e-commerce, may automatically use the following categories of cookies:</p>

                <div className="space-y-6 mb-8">
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-6 h-6 text-green-500" />
                      <h3 className="text-xl font-space-grotesk font-semibold text-green-700">Strictly Necessary Cookies</h3>
                    </div>
                    <p className="text-green-700 mb-3">These cookies are essential for the Website to function and cannot be switched off. They include:</p>
                    <ul className="list-disc pl-6 text-green-700 space-y-1">
                      <li>Authentication and login verification</li>
                      <li>Shopping cart functionality</li>
                      <li>Order checkout and secure payment processing</li>
                    </ul>
                    <p className="text-sm text-green-600 mt-3 italic">These do not require user consent as per privacy regulations.</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="w-6 h-6 text-blue-500" />
                      <h3 className="text-xl font-space-grotesk font-semibold text-blue-700">Performance & Analytics Cookies</h3>
                    </div>
                    <p className="text-blue-700 mb-3">These cookies help us analyse website traffic, visitor behaviour, and product performance.</p>
                    <p className="text-sm text-blue-600 italic">These may be turned off via your browser settings.</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6 text-purple-500" />
                      <h3 className="text-xl font-space-grotesk font-semibold text-purple-700">Functional Cookies</h3>
                    </div>
                    <p className="text-purple-700 mb-3">These enhance the functionality and personalization of our Website, such as:</p>
                    <ul className="list-disc pl-6 text-purple-700 space-y-1">
                      <li>Remembering language or location preferences</li>
                      <li>Enabling product filters or recently viewed items</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Cookie Duration</h2>
                <p className="mb-4">Cookies can be:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li><strong>Session cookies</strong> – deleted when you close your browser</li>
                  <li><strong>Persistent cookies</strong> – remain on your device until they expire or are manually deleted</li>
                </ul>
                <p className="mb-6">Our Website may use both, depending on the cookie type and function.</p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Managing Your Cookie Preferences</h2>
                <p className="mb-4">You can manage or disable cookies through your browser settings. Most browsers allow you to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>See what cookies are set</li>
                  <li>Delete specific cookies</li>
                  <li>Block third-party cookies or all cookies altogether</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                  <p className="text-yellow-800">
                    <strong>Please note:</strong> Disabling essential cookies may affect the Website's functionality.
                  </p>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Third-Party Services</h2>
                <p className="mb-6">
                  Our website may integrate with third-party services such as payment gateways, analytics tools, and social media platforms. These services may set their own cookies. We encourage you to review their respective cookie policies.
                </p>

                <div className="bg-saikou-accent-light p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary mb-2">Questions About Cookies?</h3>
                  <p className="mb-2">
                    If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;
