
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{name: string, email: string, avatar: string} | null>(null);

  const handleGoogleLogin = () => {
    // Simulate Google login - in a real app, you'd integrate with Google OAuth
    setIsLoggedIn(true);
    setUser({
      name: "John Doe",
      email: "john.doe@gmail.com",
      avatar: "https://via.placeholder.com/80"
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-saikou-background via-white to-saikou-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                alt="Saikou Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-darker-grotesque font-medium">Made in India</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saikou-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/products" className="text-saikou-secondary font-darker-grotesque font-medium hover:text-saikou-accent transition-colors relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saikou-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/my-account" className="text-saikou-accent font-darker-grotesque font-medium relative">
                My Account
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
              </Link>
              <Link to="/cart" className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-2.5 rounded-full flex items-center gap-2 font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span>🛒</span>
                <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">0</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-8 text-center bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
              My Account
            </h1>

            {!isLoggedIn ? (
              /* Login Section */
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-4">
                    Welcome Back!
                  </h2>
                  <p className="text-gray-600 font-darker-grotesque">
                    Sign in to access your account and manage your orders
                  </p>
                </div>

                <div className="space-y-6">
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 px-6 rounded-lg font-darker-grotesque font-semibold hover:border-saikou-primary hover:bg-saikou-background transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-darker-grotesque">or</span>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-darker-grotesque focus:border-saikou-primary focus:ring-2 focus:ring-saikou-primary/20 transition-all"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg font-darker-grotesque focus:border-saikou-primary focus:ring-2 focus:ring-saikou-primary/20 transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      Sign In
                    </button>
                  </form>

                  <p className="text-center text-gray-600 font-darker-grotesque">
                    Don't have an account? <span className="text-saikou-accent font-semibold cursor-pointer hover:underline">Sign up</span>
                  </p>
                </div>
              </div>
            ) : (
              /* User Dashboard */
              <div className="space-y-8">
                {/* User Profile Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={user?.avatar}
                      alt="Profile"
                      className="w-20 h-20 rounded-full border-4 border-saikou-primary"
                    />
                    <div>
                      <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary">{user?.name}</h2>
                      <p className="text-gray-600 font-darker-grotesque">{user?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Sign Out
                  </button>
                </div>

                {/* Account Sections */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-space-grotesk font-bold text-saikou-secondary mb-4">Order History</h3>
                    <p className="text-gray-600 font-darker-grotesque mb-4">View and track your orders</p>
                    <button className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-4 py-2 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      View Orders
                    </button>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-space-grotesk font-bold text-saikou-secondary mb-4">Wishlist</h3>
                    <p className="text-gray-600 font-darker-grotesque mb-4">Save your favorite items</p>
                    <button className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-4 py-2 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      View Wishlist
                    </button>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-space-grotesk font-bold text-saikou-secondary mb-4">Profile Settings</h3>
                    <p className="text-gray-600 font-darker-grotesque mb-4">Update your account information</p>
                    <button className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-4 py-2 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Edit Profile
                    </button>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-space-grotesk font-bold text-saikou-secondary mb-4">Support</h3>
                    <p className="text-gray-600 font-darker-grotesque mb-4">Get help with your orders</p>
                    <button className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-4 py-2 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Contact Support
                    </button>
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
                className="h-8 w-auto filter brightness-0 invert"
              />
              <div>
                <p className="font-darker-grotesque opacity-80">Premium collectibles. Made in India.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Home</Link>
              <Link to="/products" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Products</Link>
              <a href="mailto:info@saikoushop.com" className="font-darker-grotesque opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">Support</a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="font-darker-grotesque opacity-60">&copy; 2024 Saikou. All rights reserved. Proudly made in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyAccount;
