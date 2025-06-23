import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Shield, Heart, Zap, MessageSquare, ExternalLink, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState<Array<{id: string, name: string, price: string}>>([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [email, setEmail] = useState('');

  // Intersection Observer for smooth scroll animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Remove preload class for smooth animations
    document.body.classList.remove('preload');
    
    // Setup Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animation elements
    const animationElements = document.querySelectorAll('.fade-in-view, .slide-in-left-view, .slide-in-right-view');
    animationElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const heroSlides = [
    {
      title: "Unbox the Legends.",
      subtitle: "Premium collectible action figures crafted with precision",
      cta: "Explore Our Best Sellers",
      ctaLink: "/products",
      image: "/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png"
    },
    {
      title: "Legends Arrive Soon.",
      subtitle: "Get notified about upcoming drops and exclusive releases",
      cta: "Notify Me on Upcoming Drops",
      ctaLink: "#newsletter",
      image: "/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png"
    }
  ];

  const addToCart = (productId: string, productName: string, productPrice: string) => {
    const newItem = { id: productId, name: productName, price: productPrice };
    setCart(prev => [...prev, newItem]);
    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for subscribing! We\'ll notify you about new releases.');
    setEmail('');
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Add preload class initially
    document.body.classList.add('preload');
    
    // Remove it after a short delay to enable smooth animations
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen scroll-container">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-4 hover-scale">
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
                <Link to="/" className="text-saikou-accent font-darker-grotesque font-medium relative hover:text-saikou-primary transition-colors">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-saikou-accent"></span>
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
                  <span className="bg-saikou-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {cart.length}
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* 1. Hero Banner (Slideshow) */}
        <section className="pt-24 bg-gradient-to-br from-saikou-background via-white to-saikou-background relative overflow-hidden scroll-section">
          <div className="container mx-auto px-4 section-spacing">
            <div className="relative">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-full absolute inset-0'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                    <div className="space-y-8 slide-in-left-view">
                      <h1 className="text-4xl lg:text-6xl font-space-grotesk font-bold leading-tight bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
                        {slide.title}
                      </h1>
                      <p className="text-xl font-darker-grotesque text-gray-600 leading-relaxed">
                        {slide.subtitle}
                      </p>
                      <div className="flex gap-4">
                        <Link 
                          to={slide.ctaLink}
                          className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover-lift card-shadow"
                        >
                          {slide.cta}
                        </Link>
                      </div>
                    </div>
                    <div className="relative slide-in-right-view">
                      <div className="absolute inset-0 bg-gradient-to-r from-saikou-primary/20 to-saikou-accent/20 rounded-2xl transform rotate-3"></div>
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="relative z-10 w-full max-w-md mx-auto hover-scale"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation */}
              <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover-lift z-10">
                <ChevronLeft className="w-6 h-6 text-saikou-secondary" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover-lift z-10">
                <ChevronRight className="w-6 h-6 text-saikou-secondary" />
              </button>
              
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-saikou-accent scale-125' 
                        : 'bg-white/50 hover:bg-white/80 hover-scale'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. About Saikou (Intro) */}
        <section className="section-spacing bg-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-in-left-view">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                  Not Just Figures—Shelf Royalty.
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-600 leading-relaxed">
                  At Saikou, we craft high-quality collectible action figures inspired by anime, gaming, superheroes, and legends. Made in India, built for shelves that demand more.
                </p>
                <Link 
                  to="/about-us"
                  className="inline-block bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover-lift card-shadow"
                >
                  Read More About Us
                </Link>
              </div>
              <div className="relative slide-in-right-view">
                <img 
                  src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                  alt="Saikou Crafting Process" 
                  className="w-full rounded-xl shadow-lg hover-scale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Collections: Saikou vs Ikon */}
        <section className="section-spacing bg-gradient-to-br from-saikou-background to-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in-view">
              <h2 className="text-4xl font-space-grotesk font-bold mb-4 bg-gradient-to-r from-saikou-secondary to-saikou-accent bg-clip-text text-transparent">
                Featured Collections
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 card-shadow hover-lift slide-in-left-view">
                <h3 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-4">Saikou</h3>
                <p className="text-gray-600 font-darker-grotesque mb-6">Full-scene action figures (dynamic poses, full bases).</p>
                <Link 
                  to="/products"
                  className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover-lift transition-all inline-block"
                >
                  Shop Saikou
                </Link>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 card-shadow hover-lift slide-in-right-view">
                <h3 className="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-4">Ikon</h3>
                <p className="text-gray-600 font-darker-grotesque mb-6">Bold, bust-style statues (clean display, strong character energy).</p>
                <Link 
                  to="/products"
                  className="bg-saikou-background border-2 border-saikou-primary text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary hover-lift transition-all inline-block"
                >
                  Shop Ikon
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Top Product: Superman */}
        <section className="section-spacing bg-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-in-left-view">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                  Kal-El lands with power.
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-600 leading-relaxed">
                  Explore the "Man of Steel" premium figurine from Saikou. Dynamic cape. Volcanic base. Pure shelf dominance.
                </p>
                <div className="flex gap-4">
                  <Link 
                    to="/product/1"
                    className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover-lift card-shadow"
                  >
                    View Product
                  </Link>
                  <button 
                    onClick={() => addToCart('1', 'Superman Premium Action Figure', '₹4,999')}
                    className="bg-saikou-background border-2 border-saikou-primary text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary hover-lift transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="relative slide-in-right-view">
                <img 
                  src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" 
                  alt="Superman Premium Action Figure" 
                  className="w-full max-w-md mx-auto hover-scale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Top Product: Sung Jin-Woo */}
        <section className="section-spacing bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden scroll-section">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold">
                  "He's not a hunter anymore—he's a monarch."
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-300 leading-relaxed">
                  The Shadow Monarch figurine from Solo Leveling is now available. Dark energy, dual blades, and full anime power.
                </p>
                <div className="flex gap-4">
                  <Link 
                    to="/product/3"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png" 
                  alt="Sung Jin-Woo Shadow Monarch" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. New Launches & Upcoming Drops */}
        <section className="section-spacing bg-gradient-to-br from-saikou-background to-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                  Legends are loading…
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-600 leading-relaxed">
                  From Gojo to Itachi, get ready for future drops based on your votes.
                </p>
                <a 
                  href="#newsletter"
                  className="inline-block bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                >
                  Notify Me
                </a>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png" 
                    alt="Upcoming Drop 1" 
                    className="w-full rounded-xl shadow-lg opacity-60 hover:opacity-100 transition-opacity"
                  />
                  <img 
                    src="/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png" 
                    alt="Upcoming Drop 2" 
                    className="w-full rounded-xl shadow-lg opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Our USPs with enhanced animations */}
        <section className="section-spacing bg-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 slide-in-left-view">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary mb-8">
                  Why Choose Saikou?
                </h2>
                <div className="space-y-6">
                  {[
                    { emoji: "🇮🇳", title: "Made Here. Not Meh.", desc: "Proudly crafted in India with global quality standards" },
                    { emoji: "🧐", title: "Details So Good, It's Rude.", desc: "Obsessing over every detail, from expressions to textures" },
                    { emoji: "🧠", title: "For Collectors, Not Kids.", desc: "Display-worthy collectibles for serious fans" },
                    { emoji: "🎁", title: "Gift It. Brag About It.", desc: "Perfect gifts that impress even the nerdiest hearts" }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center gap-4 fade-in-view stagger-delay-${index + 1}`}>
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-space-grotesk font-semibold text-saikou-secondary">{item.title}</h3>
                        <p className="font-darker-grotesque text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center slide-in-right-view">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Star, title: "Premium", subtitle: "Quality" },
                    { icon: Shield, title: "100%", subtitle: "Authentic" },
                    { icon: Heart, title: "Made", subtitle: "in India" },
                    { icon: Zap, title: "Fast", subtitle: "Delivery" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className={`p-6 bg-gradient-to-br from-saikou-background to-white rounded-xl card-shadow hover-lift fade-in-view stagger-delay-${index + 1}`}>
                        <Icon className="w-8 h-8 text-saikou-accent mx-auto mb-2" />
                        <div className="text-2xl font-space-grotesk font-bold text-saikou-accent">{item.title}</div>
                        <div className="text-sm font-darker-grotesque text-gray-600">{item.subtitle}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Join the Saikou WhatsApp Community */}
        <section className="section-spacing bg-gradient-to-br from-green-500 to-green-600 text-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold">
                  💬 "Talk Nerdy to Us."
                </h2>
                <p className="text-lg font-darker-grotesque leading-relaxed opacity-90">
                  Be part of our fan-first community. Vote on figures, get early drops, share suggestions.
                </p>
                <a 
                  href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-gray-100 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Join Now
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-darker-grotesque opacity-80">Join 500+ collectors in our community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Fan Picks: Top 10 Most-Wanted Anime Characters */}
        <section className="section-spacing bg-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                  🔥 Fan Demand is Real.
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-600 leading-relaxed">
                  See who's trending: Gojo, Naruto, Levi, Sukuna and more!
                </p>
                <a 
                  href="#"
                  className="inline-block bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                >
                  Read Blog
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/f753d099-696b-46b8-a5ec-44a8a086abb7.png" 
                  alt="Popular Anime Character" 
                  className="w-full rounded-xl shadow-lg"
                />
                <img 
                  src="/lovable-uploads/8940d71d-abcb-4bb1-898b-4e5efeb18613.png" 
                  alt="Popular Character" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10. Blog Highlight Section */}
        <section className="section-spacing bg-gradient-to-br from-saikou-background to-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                  📰 From Krypton to Konoha
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-600 leading-relaxed">
                  Stay updated on the DCU reboot, anime news, and collector trends.
                </p>
                <a 
                  href="#"
                  className="inline-block bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                >
                  Visit Blog
                </a>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" 
                  alt="Blog Preview" 
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end p-6">
                  <p className="text-white font-darker-grotesque font-semibold">Latest: DCU Superman Reboot Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Customer Testimonials / Reviews */}
        <section className="section-spacing bg-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-space-grotesk font-bold mb-4 text-saikou-secondary">
                What Our Collectors Say
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-saikou-primary to-saikou-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-saikou-background to-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-darker-grotesque text-gray-700 mb-4 italic">
                  "This figure turned my shelf into a shrine."
                </p>
                <p className="font-darker-grotesque font-semibold text-saikou-secondary">— Aryan, Pune</p>
              </div>
              
              <div className="bg-gradient-to-br from-saikou-background to-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-darker-grotesque text-gray-700 mb-4 italic">
                  "Blown away by the detail. Worth every rupee."
                </p>
                <p className="font-darker-grotesque font-semibold text-saikou-secondary">— Sneha, Delhi</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#"
                className="inline-block bg-saikou-background border-2 border-saikou-primary text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all"
              >
                View All Reviews
              </a>
            </div>
          </div>
        </section>

        {/* 12. Gifting Section */}
        <section className="section-spacing bg-gradient-to-br from-red-50 to-pink-50 scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space-grotesk font-bold text-saikou-secondary">
                  🎁 "Gift It. Brag About It."
                </h2>
                <p className="text-lg font-darker-grotesque text-gray-600 leading-relaxed">
                  Looking for the perfect fan gift? Our collectibles are designed to impress even the nerdiest hearts.
                </p>
                <a 
                  href="#"
                  className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all"
                >
                  Gift Guide
                </a>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" 
                  alt="Perfect Gift" 
                  className="w-full max-w-md mx-auto"
                />
                <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full">
                  <span className="text-2xl">🎁</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Newsletter Signup */}
        <section id="newsletter" className="section-spacing py-16 bg-gradient-to-br from-saikou-secondary to-gray-800 text-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-space-grotesk font-bold mb-4">
                📬 "Don't Miss the Drop."
              </h2>
              <p className="font-darker-grotesque text-lg mb-8 opacity-90">
                Get alerts before anyone else. Previews, exclusives, and early-bird perks.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-saikou-secondary font-darker-grotesque border-2 border-transparent focus:border-saikou-primary transition-all"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer with enhanced animations */}
        <footer className="section-spacing bg-gradient-to-br from-saikou-secondary to-gray-800 text-white scroll-section">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                {
                  title: "Explore",
                  links: [
                    { text: "Home", to: "/" },
                    { text: "Shop Saikou", to: "/products" },
                    { text: "Shop Ikon", to: "/products" },
                    { text: "Blog", to: "#" }
                  ]
                },
                {
                  title: "Saikou",
                  links: [
                    { text: "About Us", to: "/about-us" },
                    { text: "Contact Us", to: "/contact-us" },
                    { text: "Shipping Policy", to: "/shipping-policy" },
                    { text: "Returns & FAQ", to: "/returns-refunds" }
                  ]
                },
                {
                  title: "Community",
                  links: [
                    { text: "Join WhatsApp Group", to: "https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T", external: true },
                    { text: "Instagram", to: "#" },
                    { text: "YouTube", to: "#" }
                  ]
                },
                {
                  title: "Legal",
                  links: [
                    { text: "Cookie Policy", to: "/cookie-policy" },
                    { text: "Privacy Policy", to: "/privacy-policy" },
                    { text: "Terms & Conditions", to: "/terms-conditions" }
                  ]
                }
              ].map((section, index) => (
                <div key={index} className={`fade-in-view stagger-delay-${index + 1}`}>
                  <h4 className="font-space-grotesk font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2 font-darker-grotesque">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.external ? (
                          <a href={link.to} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">
                            {link.text}
                          </a>
                        ) : (
                          <Link to={link.to} className="opacity-80 hover:opacity-100 hover:text-saikou-primary transition-all">
                            {link.text}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="text-center pt-8 border-t border-gray-600 fade-in-view">
              <p className="font-darker-grotesque opacity-60">&copy; 2025 Saikou Figures. Made with ✨ in India.</p>
            </div>
          </div>
        </footer>

        {/* Cart Notification with enhanced animation */}
        {showCartNotification && (
          <div className="fixed top-24 right-4 bg-gradient-to-r from-saikou-primary to-saikou-accent text-saikou-secondary px-6 py-3 rounded-lg shadow-lg z-50 font-darker-grotesque font-semibold animate-scale-in">
            <div className="flex items-center gap-2">
              <span>🎉</span>
              Item added to cart!
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Index;
