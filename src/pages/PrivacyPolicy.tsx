
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Mail, Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
                <h1 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">Privacy Policy</h1>
              </div>
              
              <div className="bg-saikou-accent-light p-4 rounded-lg mb-8">
                <p className="text-sm font-darker-grotesque text-saikou-text">
                  <strong>Last Updated:</strong> December 23, 2024
                </p>
              </div>

              <div className="prose prose-lg max-w-none font-darker-grotesque text-saikou-text">
                <p className="text-lg leading-relaxed mb-6">
                  SAIKOU ("We", "Us" or "Our") is dedicated to safeguarding Your privacy and ensuring the security of Your personal information. The purpose of this Privacy Policy ("Privacy Policy") is to describe the statement of transparency. It describes what information We collect about You (referred to as "User", "Your") during Your Use and access of www.saikoushop.com ("Website"), why we collect this information, how we Use Your information, how We protect and share Your information, including Your rights.
                </p>

                <p className="mb-6">
                  We are committed to complying with applicable laws of India including Information Technology Act, 2000 (as amended), Digital Personal Data Protection Act (as applicable), Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, Indian Contracts Act, 1872 and any other applicable rules, guidelines or judicial decisions in force in India.
                </p>

                <p className="mb-8">
                  By Using Our Website, engaging in or submitting information through any of our registration and/or contact forms, You acknowledge and consent to Our collection, processing and Usage of Your personal data in accordance with this Privacy Policy.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Personal Information</h3>
                <p className="mb-4">
                  This includes any information that can be used to identify You directly or indirectly, including:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Name and Email Address</li>
                  <li>Contact Number</li>
                  <li>Shipping and Billing Address</li>
                  <li>Order History and Purchase Preferences</li>
                </ul>

                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Non-Personal Information</h3>
                <p className="mb-4">
                  This includes any information that cannot be used, on its own, to identify a specific individual. We may collect non-personal information such as browsing history, IP addresses, or device-specific data.
                </p>

                <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mt-6 mb-3">Information You Voluntarily Provide</h3>
                <p className="mb-4">
                  This includes any information You enter in forms on our website, such as:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Request Forms, Posts, Comments and Contact Forms</li>
                  <li>Customer Service Requests</li>
                  <li>Feedback, Reviews and Testimonials</li>
                  <li>Survey Responses (if applicable)</li>
                </ul>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">2. How We Collect Information</h2>
                <p className="mb-4">
                  We collect information through various methods including direct submissions through forms, automatic collection via cookies, and through your interactions with our website and customer service.
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">3. Payment Information</h2>
                <p className="mb-6">
                  We do not directly store payment/card information. All transactions are processed securely through third-party payment gateway, Razorpay (India).
                </p>

                <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mt-8 mb-4">4. Third-Party Services</h2>
                <p className="mb-6">
                  This Privacy Policy does not apply to third-party websites or applications linked from or integrated with the Website, including but not limited to payment gateways, courier services, social media platforms, or analytics tools not under SAIKOU's control. We encourage You to review their respective privacy policies before engaging with them.
                </p>

                <div className="bg-saikou-accent-light p-6 rounded-lg mt-8">
                  <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary mb-2">Contact Us</h3>
                  <p className="mb-2">
                    If You have any questions, concerns, or require further information about our privacy practices, please reach out to Us:
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-saikou-accent" />
                    <a href="mailto:care@saikoushop.com" className="text-saikou-accent hover:text-saikou-primary transition-colors">
                      care@saikoushop.com
                    </a>
                  </div>
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

export default PrivacyPolicy;
