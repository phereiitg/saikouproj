
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Superman Premium Action Figure',
      price: 4999,
      quantity: 1,
      image: '/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png'
    },
    {
      id: '2',
      name: 'Hulk Patreon Edition Statue',
      price: 6499,
      quantity: 2,
      image: '/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 199;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-saikou-background">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex flex-col">
              <h1 className="text-2xl font-space-grotesk font-bold text-saikou-secondary">Saikou</h1>
              <span className="text-xs text-gray-600 font-darker-grotesque font-medium -mt-1">Made in India</span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-saikou-secondary hover:text-saikou-accent transition-colors">
              <ArrowLeft size={20} />
              <span className="font-darker-grotesque font-medium">Continue Shopping</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-space-grotesk font-bold text-saikou-secondary mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Your cart is empty</h2>
            <p className="text-gray-600 font-darker-grotesque mb-8">Looks like you haven't added anything to your cart yet</p>
            <Link 
              to="/"
              className="bg-saikou-primary text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-space-grotesk font-semibold text-saikou-secondary mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xl font-space-grotesk font-bold text-saikou-accent mb-4">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-saikou-primary flex items-center justify-center hover:bg-saikou-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-darker-grotesque font-semibold">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-saikou-primary flex items-center justify-center hover:bg-saikou-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 shadow-lg h-fit">
              <h2 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-darker-grotesque">
                  <span className="text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="text-saikou-secondary">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-darker-grotesque">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-saikou-secondary">₹{shipping}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-space-grotesk font-bold text-lg">
                  <span className="text-saikou-secondary">Total</span>
                  <span className="text-saikou-accent">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Link 
                to="/payment"
                className="w-full bg-saikou-primary text-saikou-secondary py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all text-center block"
              >
                Proceed to Checkout
              </Link>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 font-darker-grotesque">
                  Free shipping on orders over ₹5,000
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
