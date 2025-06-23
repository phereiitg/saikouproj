
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const ReturnsRefunds = () => {
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
                <Shield className="w-8 h-8 text-saikou-accent" />
                <h1 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">Returns & Refunds Policy</h1>
              </div>
              
              <div className="bg-saikou-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm font-darker-grotesque text-saikou-text">
                  <strong>Last Updated:</strong> December 23, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none font-darker-grotesque text-saikou-text">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    <h3 className="text-lg font-space-grotesk font-bold text-red-700">Important Notice</h3>
                  </div>
                  <p className="text-red-700 font-semibold">
                    All sales on SAIKOU are final. We do not offer refunds.
                  </p>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">General Statement</h2>
                <p className="mb-6">
                  All sales on SAIKOU are final. We do not offer refunds. Our product offerings go through a rigorous quality check at different stages of the manufacturing process and remains free from all defects and/or inconsistencies.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Damaged Packaging Upon Delivery</h2>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                  <p className="mb-4"><strong>If the external package appears tampered, crumpled, or unsealed:</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Please do not accept delivery</li>
                    <li>Take a clear video of unboxing and email us at care@saikoushop.com within 24 hours of receiving the package</li>
                    <li>Open only under video surveillance to ensure integrity of return claims</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Return Eligibility</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <h3 className="font-space-grotesk font-semibold text-green-700">Eligible for Return</h3>
                    </div>
                    <ul className="text-sm space-y-2 text-green-700">
                      <li>• Notify us within 24 hours of receiving the package</li>
                      <li>• Share an unboxing video and photos proving the damage</li>
                      <li>• Product damaged during shipping</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                      <h3 className="font-space-grotesk font-semibold text-red-700">Not Eligible for Return</h3>
                    </div>
                    <ul className="text-sm space-y-2 text-red-700">
                      <li>• Buyer's remorse</li>
                      <li>• Dissatisfaction with fan art interpretations</li>
                      <li>• Color or scale variations due to lighting/screen differences</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Return Authorization</h2>
                <p className="mb-4">
                  We will assess Your evidence and, if approved, authorize a replacement (at Our discretion).
                </p>
                <p className="mb-6">
                  Returns without prior authorization or outside the claim period will not be accepted. Upon successful confirmation of product eligibility for Return, Our Customer Support team will guide you with further process of return for a hassle-free and successful Return and Replacement.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Return Shipping</h2>
                <p className="mb-6">
                  Unless otherwise agreed, return shipping will be borne by the customer. Instructions will be shared via email.
                </p>

                <div className="bg-saikou-accent-light p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary mb-2">Need Assistance?</h3>
                  <p className="mb-2">
                    For any return or refund related queries, please contact our support team:
                  </p>
                  <p className="text-saikou-accent font-semibold">care@saikoushop.com</p>
                  <p className="text-sm text-saikou-text mt-2">
                    Please include your order number and detailed description of the issue.
                  </p>
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

export default ReturnsRefunds;
