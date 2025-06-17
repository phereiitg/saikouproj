
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Settings, ShoppingBag, Heart, LogOut, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const MyAccount = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    setLoading(true);
    // Simulate Google login
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      });
      setLoading(false);
    }, 2000);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-saikou-background via-white to-saikou-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50 transition-all duration-300">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <img 
                    src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                    alt="Saikou Logo" 
                    className="h-16 w-auto transition-transform duration-300 hover:rotate-3"
                  />
                  <span className="text-xs text-gray-500 font-darker-grotesque font-medium -mt-1">Made in India</span>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saikou-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/products" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors duration-300 relative group">
                  Products
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saikou-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/my-account" className="text-saikou-accent font-darker-grotesque font-medium relative">
                  My Account
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
                </Link>
                <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
                  <span>🛒</span>
                  <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    0
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {!user ? (
                // Login Section
                <div className="text-center animate-fade-in">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                    <div className="w-24 h-24 bg-gradient-to-r from-saikou-primary to-saikou-accent rounded-full flex items-center justify-center mx-auto mb-8 transform hover:rotate-12 transition-transform duration-300">
                      <User className="w-12 h-12 text-saikou-secondary" />
                    </div>
                    
                    <h1 className="text-4xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
                      Welcome to Saikou
                    </h1>
                    <p className="text-xl font-darker-grotesque text-gray-600 mb-8 max-w-md mx-auto">
                      Sign in to access your account, track orders, and manage your collectibles.
                    </p>
                    
                    <button
                      onClick={handleGoogleLogin}
                      disabled={loading}
                      className={`bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-darker-grotesque font-semibold flex items-center gap-3 mx-auto hover:border-saikou-accent hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-saikou-accent"></div>
                          Signing in...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Continue with Google
                        </>
                      )}
                    </button>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-saikou-background to-white rounded-xl border border-saikou-primary/20">
                      <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-saikou-accent" />
                        Why create an account?
                      </h3>
                      <ul className="text-sm font-darker-grotesque text-gray-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-saikou-accent rounded-full"></div>
                          Track your orders and delivery status
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-saikou-accent rounded-full"></div>
                          Save your favorite collectibles
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-saikou-accent rounded-full"></div>
                          Get exclusive offers and early access
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-saikou-accent rounded-full"></div>
                          Manage your collection wishlist
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                // User Dashboard
                <div className="space-y-8 animate-fade-in">
                  {/* User Profile Header */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="flex items-center gap-6">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-20 h-20 rounded-full border-4 border-saikou-primary shadow-lg transform hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <h1 className="text-3xl font-space-grotesk font-bold text-saikou-secondary mb-2">
                          Welcome back, {user.name}!
                        </h1>
                        <p className="font-darker-grotesque text-gray-600 flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {user.email}
                        </p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 transform flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { icon: ShoppingBag, title: 'My Orders', desc: 'Track your purchases', color: 'from-blue-500 to-blue-600' },
                      { icon: Heart, title: 'Wishlist', desc: 'Saved collectibles', color: 'from-pink-500 to-red-500' },
                      { icon: Settings, title: 'Account Settings', desc: 'Manage preferences', color: 'from-gray-500 to-gray-600' },
                      { icon: ExternalLink, title: 'Support', desc: 'Get help', color: 'from-green-500 to-green-600' }
                    ].map((action, index) => (
                      <div 
                        key={action.title}
                        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group transform"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-space-grotesk font-semibold text-saikou-secondary mb-2 group-hover:text-saikou-accent transition-colors duration-300">
                          {action.title}
                        </h3>
                        <p className="font-darker-grotesque text-gray-600 text-sm">
                          {action.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                      {[
                        { action: 'Added to wishlist', item: 'Superman Premium Action Figure', time: '2 hours ago' },
                        { action: 'Order placed', item: 'Hulk Patreon Edition Statue', time: '1 day ago' },
                        { action: 'Viewed product', item: 'Anime Warrior Dark Edition', time: '3 days ago' }
                      ].map((activity, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-saikou-background to-white rounded-lg border border-saikou-primary/20 transform hover:scale-105 transition-transform duration-300"
                        >
                          <div>
                            <p className="font-darker-grotesque text-saikou-secondary font-medium">{activity.action}</p>
                            <p className="font-darker-grotesque text-gray-600 text-sm">{activity.item}</p>
                          </div>
                          <span className="font-darker-grotesque text-gray-500 text-sm">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 bg-gradient-to-br from-saikou-secondary to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-6 md:mb-0 flex items-center gap-3">
                <img 
                  src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                  alt="Saikou Logo" 
                  className="h-8 w-auto filter brightness-0 invert hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <p className="font-darker-grotesque opacity-80">Premium collectibles. Made in India.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all duration-300 transform hover:scale-105">Home</Link>
                <Link to="/products" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all duration-300 transform hover:scale-105">Products</Link>
                <a href="mailto:info@saikoushop.com" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all duration-300 transform hover:scale-105">Support</a>
              </div>
            </div>
            <div className="text-center pt-8 border-t border-gray-600">
              <p className="font-darker-grotesque opacity-60">&copy; 2024 Saikou. All rights reserved. Proudly made in India.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default MyAccount;
