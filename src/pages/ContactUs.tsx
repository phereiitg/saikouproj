
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Feedback',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', category: 'Feedback', message: '' });
  };

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
                <Link to="/about-us" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors">
                  About Us
                </Link>
                <Link to="/contact-us" className="text-saikou-accent font-darker-grotesque font-medium relative">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
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
                Got Ideas? Yell at Us Politely.
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
                <div>
                  <label htmlFor="name" className="block text-sm font-darker-grotesque font-semibold text-saikou-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-darker-grotesque font-semibold text-saikou-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-darker-grotesque font-semibold text-saikou-secondary mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent focus:border-transparent transition-all"
                  >
                    <option value="Feedback">Feedback</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Suggest a Character">Suggest a Character</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-darker-grotesque font-semibold text-saikou-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              {/* WhatsApp Community CTA */}
              <div className="mt-12 text-center bg-gradient-to-br from-saikou-background to-white p-8 rounded-2xl shadow-lg">
                <div className="mb-4">
                  <span className="text-4xl mb-4 block">💬</span>
                  <h3 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-2">
                    Want quicker updates?
                  </h3>
                  <p className="font-darker-grotesque text-gray-600 mb-6">
                    Join our WhatsApp community for instant updates, early drops, and direct chat with fellow collectors!
                  </p>
                </div>
                <a
                  href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-green-600 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Join the Saikou WhatsApp Community
                </a>
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

export default ContactUs;
