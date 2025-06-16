
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const products = {
    '1': {
      id: '1',
      name: 'Superman Premium Action Figure',
      price: '₹4,999',
      originalPrice: '₹5,999',
      images: ['/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png'],
      badge: 'Premium',
      collection: 'Saikou Collection',
      description: 'Strike a pose with the Last Son of Krypton! This Man of Steel action figure by Saikou is a full-sized, high-detail collectible built for bold shelves and true fans.',
      features: [
        '12-inch premium action figure',
        'Highly detailed sculpting and paint',
        'Multiple points of articulation',
        'Authentic costume details',
        'Collectible base included',
        'Limited edition numbering'
      ],
      specifications: {
        'Height': '12 inches (30.5 cm)',
        'Material': 'High-grade PVC and ABS',
        'Articulation': '20+ points',
        'Base': 'Themed display base included',
        'Edition': 'Limited to 1000 pieces'
      }
    },
    '2': {
      id: '2',
      name: 'Hulk Patreon Edition Statue',
      price: '₹6,499',
      originalPrice: '₹7,999',
      images: ['/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png'],
      badge: 'Limited',
      collection: 'Saikou Collection',
      description: 'The incredible Hulk in all his rage and glory. This statue captures the green giant mid-smash with incredible detail and dynamic positioning.',
      features: [
        '14-inch premium statue',
        'Museum-quality sculpting',
        'Hand-painted details',
        'Weathered effects',
        'Destruction base',
        'Certificate of authenticity'
      ],
      specifications: {
        'Height': '14 inches (35.5 cm)',
        'Material': 'Polystone resin',
        'Base': 'Destruction scene base',
        'Weight': '3.2 kg',
        'Edition': 'Limited to 500 pieces'
      }
    },
    '3': {
      id: '3',
      name: 'Anime Warrior Dark Edition',
      price: '₹5,999',
      originalPrice: '₹6,999',
      images: ['/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png'],
      badge: 'Exclusive',
      collection: 'Ikon Collection',
      description: 'A mysterious warrior shrouded in darkness and power. This exclusive figure showcases intricate armor details and dynamic action pose.',
      features: [
        '10-inch bust-style figure',
        'Intricate armor detailing',
        'LED lighting effects',
        'Premium paint finish',
        'Numbered edition',
        'Display case included'
      ],
      specifications: {
        'Height': '10 inches (25.4 cm)',
        'Material': 'High-grade PVC',
        'Features': 'LED lighting',
        'Power': 'Battery operated',
        'Edition': 'Limited to 750 pieces'
      }
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-4">Product Not Found</h2>
          <Link to="/" className="bg-saikou-primary text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-saikou-secondary hover:text-saikou-accent transition-colors">
                <ArrowLeft size={20} />
                <span className="font-darker-grotesque font-medium">Back to Shop</span>
              </Link>
              <Link to="/cart" className="bg-saikou-primary text-saikou-secondary px-4 py-2 rounded-lg flex items-center gap-2 font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                <span>🛒</span>
                <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">0</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-saikou-accent' : 'border-gray-300'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-saikou-accent text-white px-3 py-1 rounded-full text-sm font-darker-grotesque font-semibold">
                  {product.badge}
                </span>
                <span className="text-saikou-accent font-darker-grotesque font-medium">
                  {product.collection}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-space-grotesk font-bold text-saikou-secondary mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-space-grotesk font-bold text-saikou-accent">
                  {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through font-darker-grotesque">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-darker-grotesque font-semibold">
                  Save {((parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))) / parseInt(product.originalPrice.replace('₹', '').replace(',', '')) * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-gray-600 font-darker-grotesque leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-darker-grotesque font-semibold text-saikou-secondary">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-saikou-primary flex items-center justify-center hover:bg-saikou-primary transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-darker-grotesque font-semibold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-saikou-primary flex items-center justify-center hover:bg-saikou-primary transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 bg-saikou-primary text-saikou-secondary py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                  Add to Cart
                </button>
                <Link 
                  to="/payment"
                  className="flex-1 bg-saikou-secondary text-white py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-gray-800 transition-all text-center"
                >
                  Buy Now
                </Link>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 font-darker-grotesque text-gray-600">
                    <span className="w-2 h-2 bg-saikou-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-darker-grotesque font-medium text-gray-600">{key}:</span>
                    <span className="font-darker-grotesque text-saikou-secondary">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
