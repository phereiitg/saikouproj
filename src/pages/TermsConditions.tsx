
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { FileText, Scale, Shield } from 'lucide-react';

const TermsConditions = () => {
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
                <FileText className="w-8 h-8 text-saikou-accent" />
                <h1 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">Terms & Conditions</h1>
              </div>
              
              <div className="bg-saikou-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm font-darker-grotesque text-saikou-text">
                  <strong>Last Updated:</strong> December 23, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none font-darker-grotesque text-saikou-text">
                <p className="text-lg leading-relaxed mb-6">
                  These Terms and Conditions ("Terms") govern the use of SAIKOU, the domain holder of www.saikoushop.com (interchangeably referred to as 'We', 'Website', 'Us', Our') and the User of this website (referred to as 'You', 'Your'). We duly comply with the Information Technology Act, 2000 (as amended by Information Technology (Amendment) Act, 2008 and the rules made thereunder, including the Information Technology (Reasonable security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and/or SPDI Rules, 2011.
                </p>

                <p className="mb-8">
                  By using Our Website or providing information, You accept and agree to be legally bound by the following Terms and Conditions.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Business Information</h2>
                <div className="bg-saikou-accent-light p-6 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-saikou-accent" />
                    <h3 className="font-space-grotesk font-semibold text-saikou-secondary">About Saikou</h3>
                  </div>
                  <p>
                    We are an India-origin entity specializing in the crafting, design, manufacture and sale of high-quality collectible figurines. All our products are proudly made in India, with a deep appreciation for detail and a passion for bringing culturally meaningful characters to life. Our collection includes anime figures, comic and gaming characters as well as religious icons. We are committed to delivering exclusive, well-researched and affordably priced collectibles to enthusiasts across the country.
                  </p>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Key Definitions</h2>
                <div className="space-y-4 mb-8">
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Agreement"</h4>
                    <p className="text-sm">Refers to these Terms and Conditions, including any amendments, modifications or supplements hereto, along with any other policies and guidelines incorporated herein by reference.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Products"</h4>
                    <p className="text-sm">Shall mean collectibles consisting of anime figures, comic and gaming characters, as well as religious icons, listings of which shall be updated on the Website from time to time.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Limited Edition"</h4>
                    <p className="text-sm">Refers to Products manufactured or procured in restricted quantities and clearly marked as such on the Website, which may not be restocked once sold out.</p>
                  </div>
                  
                  <div className="border-l-4 border-saikou-accent pl-4">
                    <h4 className="font-space-grotesk font-semibold text-saikou-secondary">"Custom Orders"</h4>
                    <p className="text-sm">Means Products created or procured by Us based on specific requests or customization inputs provided by the User.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Acceptance of Terms</h2>
                <p className="mb-6">
                  We recommend that You review these Terms and Conditions carefully before accessing or using the Website. Any new features or tools added to the Website will also be subject to these Terms. The current version of the Terms and Conditions can be reviewed at any time on this page.
                </p>
                
                <p className="mb-6">
                  We reserve the right to update, modify, or replace any part of these Terms by posting changes to Our Website. Your continued use of the site following such updates constitutes acceptance of those changes.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Website Infrastructure</h2>
                <p className="mb-6">
                  Our e-commerce Website is custom built, which provides us with digital infrastructure to offer Our products and services online in a secure and reliable environment.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Force Majeure</h2>
                <p className="mb-6">
                  "Force Majeure Event" means any event beyond the reasonable control of Saikou, including but not limited to natural disasters, pandemic, acts of God, war, riots, strikes, lockouts, cyber-attacks, power failures, internet outages, or government restrictions.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Privacy & Data Protection</h2>
                <p className="mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Website, to understand our practices regarding the collection and use of your personal information.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">Applicable Laws</h2>
                <p className="mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                </p>

                <div className="bg-saikou-accent-light p-6 rounded-lg mt-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Scale className="w-6 h-6 text-saikou-accent" />
                    <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary">Legal Compliance</h3>
                  </div>
                  <p className="text-sm">
                    By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
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

export default TermsConditions;
