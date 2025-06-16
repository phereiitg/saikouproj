
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Truck } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const orderItems = [
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
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 199;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    alert('Order placed successfully! You will receive a confirmation email shortly.');
  };

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
            <Link to="/cart" className="flex items-center gap-2 text-saikou-secondary hover:text-saikou-accent transition-colors">
              <ArrowLeft size={20} />
              <span className="font-darker-grotesque font-medium">Back to Cart</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-space-grotesk font-bold text-saikou-secondary mb-8">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                  />
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    />
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    >
                      <option value="">Select State</option>
                      <option value="AN">Andaman and Nicobar Islands</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CG">Chhattisgarh</option>
                      <option value="CH">Chandigarh</option>
                      <option value="DH">Dadra and Nagar Haveli</option>
                      <option value="DD">Daman and Diu</option>
                      <option value="DL">Delhi</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="LD">Lakshadweep</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OR">Odisha</option>
                      <option value="PY">Puducherry</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TS">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UK">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                    </select>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="PIN Code"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Payment Method</h2>
                
                <div className="space-y-4 mb-6">
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-saikou-accent"
                    />
                    <CreditCard size={20} className="text-saikou-accent" />
                    <span className="font-darker-grotesque font-medium">Credit/Debit Card</span>
                  </label>
                  
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-saikou-accent"
                    />
                    <span className="text-saikou-accent font-bold">₹</span>
                    <span className="font-darker-grotesque font-medium">UPI</span>
                  </label>
                  
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-saikou-accent"
                    />
                    <Truck size={20} className="text-saikou-accent" />
                    <span className="font-darker-grotesque font-medium">Cash on Delivery</span>
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="nameOnCard"
                      placeholder="Name on card"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    />
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-darker-grotesque focus:outline-none focus:ring-2 focus:ring-saikou-accent"
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-saikou-primary text-saikou-secondary py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all text-lg"
              >
                Place Order - ₹{total.toLocaleString('en-IN')}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-darker-grotesque font-medium text-sm text-saikou-secondary">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-darker-grotesque">Qty: {item.quantity}</p>
                      <p className="font-space-grotesk font-semibold text-saikou-accent">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between font-darker-grotesque text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between font-darker-grotesque text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="flex justify-between font-space-grotesk font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-saikou-accent">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3 text-green-600">
                <Shield size={20} />
                <div>
                  <p className="font-darker-grotesque font-semibold text-sm">Secure Payment</p>
                  <p className="font-darker-grotesque text-xs text-gray-500">Your payment information is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
