
<?php
/**
 * The main template file for Saikou WordPress theme
 * 
 * @package Saikou
 */

get_header(); ?>

<!-- Hero Slideshow Section -->
<section class="hero-slideshow">
    <div class="slideshow-container">
        <div class="slide active">
            <div class="slide-content">
                <div class="container mx-auto px-4 py-16">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 class="text-4xl lg:text-6xl font-space-grotesk font-bold text-saikou-secondary mb-6">
                                Sculpted with Love. And Way Too Much Time.
                            </h1>
                            <p class="text-lg text-gray-600 font-darker-grotesque mb-8">
                                Premium collectible action figures inspired by anime, superheroes, gaming legends, and mythical icons. Proudly designed and crafted in India.
                            </p>
                            <div class="flex gap-4">
                                <a href="#collections" class="bg-saikou-primary text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                                    Explore Collections
                                </a>
                                <a href="#products" class="border-2 border-saikou-primary text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-primary transition-all">
                                    New Arrivals
                                </a>
                            </div>
                        </div>
                        <div class="relative">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" alt="Superman Premium Action Figure" class="w-full max-w-md mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="slide">
            <div class="slide-content">
                <div class="container mx-auto px-4 py-16">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 class="text-4xl lg:text-6xl font-space-grotesk font-bold text-saikou-secondary mb-6">
                                Hulk Smash Collection
                            </h1>
                            <p class="text-lg text-gray-600 font-darker-grotesque mb-8">
                                Unleash the power with our exclusive Hulk collection. Built for collectors who demand the extraordinary.
                            </p>
                            <div class="flex gap-4">
                                <a href="/product/2" class="bg-saikou-primary text-saikou-secondary px-8 py-4 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div class="relative">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/8940d71d-abcb-4bb1-898b-4e5efeb18613.png" alt="Hulk Patreon Edition" class="w-full max-w-md mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Navigation dots -->
        <div class="slideshow-nav">
            <button class="nav-dot active" onclick="currentSlide(1)"></button>
            <button class="nav-dot" onclick="currentSlide(2)"></button>
        </div>
        
        <!-- Navigation arrows -->
        <button class="prev" onclick="plusSlides(-1)">❮</button>
        <button class="next" onclick="plusSlides(1)">❯</button>
    </div>
</section>

<!-- Features Section -->
<section class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-saikou-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">🇮🇳</span>
                </div>
                <h3 class="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-2">Made Here. Not Meh.</h3>
                <p class="text-gray-600 font-darker-grotesque">Proudly made in India with global-quality standards</p>
            </div>
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-saikou-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">✨</span>
                </div>
                <h3 class="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-2">Details So Good, It's Rude.</h3>
                <p class="text-gray-600 font-darker-grotesque">From facial expressions to fabric folds, we obsess over every pixel</p>
            </div>
            <div class="text-center p-6">
                <div class="w-16 h-16 bg-saikou-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">🏆</span>
                </div>
                <h3 class="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-2">For Collectors, Not Kids.</h3>
                <p class="text-gray-600 font-darker-grotesque">Display-worthy, conversation-starting collectibles</p>
            </div>
        </div>
    </div>
</section>

<!-- Collections Section -->
<section id="collections" class="py-16 bg-saikou-background">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-space-grotesk font-bold text-center text-saikou-secondary mb-12">Our Collections</h2>
        <div class="grid lg:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg p-8 shadow-lg">
                <h3 class="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-4">Saikou</h3>
                <p class="text-gray-600 font-darker-grotesque mb-6">Our flagship collection of full-sized, high-quality action figures—designed for fans who want more than just a toy. From anime action figures and superhero statues to gaming collectibles and legendary characters.</p>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Full-Size Glory</span>
                    <span class="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Dynamic Poses</span>
                    <span class="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Premium Finishes</span>
                </div>
            </div>
            <div class="bg-white rounded-lg p-8 shadow-lg">
                <h3 class="text-2xl font-space-grotesk font-bold text-saikou-secondary mb-4">Ikon</h3>
                <p class="text-gray-600 font-darker-grotesque mb-6">Our exclusive collection of premium bust-style collectible figures—designed to deliver high-impact character presence in a compact, display-friendly format. Perfect for collectors, desk displays, or gifting.</p>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Bust-Style</span>
                    <span class="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Compact Display</span>
                    <span class="bg-saikou-primary text-saikou-secondary px-3 py-1 rounded-full text-sm font-darker-grotesque font-medium">Bold Style</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Products Section -->
<section id="products" class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-space-grotesk font-bold text-center text-saikou-secondary mb-12">Featured Products</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Product 1 -->
            <div class="bg-saikou-background rounded-lg overflow-hidden shadow-lg">
                <div class="relative aspect-square bg-white p-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" alt="Superman Premium Action Figure" class="w-full h-full object-contain">
                    <span class="absolute top-4 right-4 bg-saikou-accent text-white px-2 py-1 rounded text-xs font-darker-grotesque font-semibold">Premium</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-2">Superman Premium Action Figure</h3>
                    <p class="text-sm text-gray-600 font-darker-grotesque mb-2">Premium Action Figure by Saikou</p>
                    <p class="text-2xl font-space-grotesk font-bold text-saikou-accent mb-4">₹4,999</p>
                    <p class="text-gray-600 font-darker-grotesque mb-6">Strike a pose with the Last Son of Krypton! This Man of Steel action figure by Saikou is a full-sized, high-detail collectible built for bold shelves and true fans.</p>
                    <div class="flex gap-2">
                        <a href="/product/1" class="flex-1 bg-saikou-primary text-saikou-secondary text-center py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                            View Details
                        </a>
                        <button class="bg-saikou-accent text-white px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-opacity-80 transition-all add-to-cart" data-product-id="1">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- Product 2 -->
            <div class="bg-saikou-background rounded-lg overflow-hidden shadow-lg">
                <div class="relative aspect-square bg-white p-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/8940d71d-abcb-4bb1-898b-4e5efeb18613.png" alt="Hulk Patreon Edition Statue" class="w-full h-full object-contain">
                    <span class="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-darker-grotesque font-semibold">Limited</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-2">Hulk Patreon Edition Statue</h3>
                    <p class="text-sm text-gray-600 font-darker-grotesque mb-2">Premium Collectible by Saikou</p>
                    <p class="text-2xl font-space-grotesk font-bold text-saikou-accent mb-4">₹6,499</p>
                    <p class="text-gray-600 font-darker-grotesque mb-6">Unleash the incredible power with this exclusive Hulk statue. Limited edition collectible featuring dynamic pose and premium finish.</p>
                    <div class="flex gap-2">
                        <a href="/product/2" class="flex-1 bg-saikou-primary text-saikou-secondary text-center py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                            View Details
                        </a>
                        <button class="bg-saikou-accent text-white px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-opacity-80 transition-all add-to-cart" data-product-id="2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <!-- Product 3 -->
            <div class="bg-saikou-background rounded-lg overflow-hidden shadow-lg">
                <div class="relative aspect-square bg-white p-4">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/f753d099-696b-46b8-a5ec-44a8a086abb7.png" alt="Anime Hero Figure" class="w-full h-full object-contain">
                    <span class="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-darker-grotesque font-semibold">New</span>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-space-grotesk font-semibold text-saikou-secondary mb-2">Anime Hero Premium Figure</h3>
                    <p class="text-sm text-gray-600 font-darker-grotesque mb-2">Anime Collection by Saikou</p>
                    <p class="text-2xl font-space-grotesk font-bold text-saikou-accent mb-4">₹3,999</p>
                    <p class="text-gray-600 font-darker-grotesque mb-6">Bring your favorite anime character to life with this detailed premium figure. Perfect for collectors and anime enthusiasts.</p>
                    <div class="flex gap-2">
                        <a href="/product/3" class="flex-1 bg-saikou-primary text-saikou-secondary text-center py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                            View Details
                        </a>
                        <button class="bg-saikou-accent text-white px-6 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-opacity-80 transition-all add-to-cart" data-product-id="3">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-16 bg-saikou-background">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-space-grotesk font-bold text-saikou-secondary mb-8">Who We Are</h2>
            <div class="text-lg text-gray-700 font-darker-grotesque space-y-6">
                <p class="font-semibold">At Saikou, we're not just making action figures—we're bringing your favorite characters to life, one sculpt at a time.</p>
                <p>Born out of pure fandom and frustration (ever paid way too much for a flimsy imported figure?) Saikou was created to give Indian fans the quality they deserve—without the wait, the customs drama, or the disappointing paint jobs.</p>
                <p>From anime action figures and superhero collectibles to gaming icons and mythical legends, everything we make is built with care, crafted in India, and designed to look damn good on your shelf. Whether you're a serious collector or just searching for the perfect gift, we make characters that feel personal—and figures that feel premium.</p>
                <p class="italic">We sweat the small stuff. We obsess over details. And yes, we take way too long perfecting things. But that's what happens when you're fans first, makers second.</p>
                <div class="bg-saikou-primary p-6 rounded-lg mt-8">
                    <p class="font-space-grotesk font-bold text-saikou-secondary">Welcome to Saikou. Collectibles that actually live up to the hype.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="py-16 bg-saikou-secondary">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-space-grotesk font-bold text-white mb-4">Help Us Make Cooler Stuff</h2>
        <p class="text-lg text-gray-300 font-darker-grotesque mb-8">New figurines loading... Smash that "Notify Me" button like it owes you money!</p>
        <form class="max-w-md mx-auto flex gap-4" id="newsletter-form">
            <input type="email" placeholder="Your email address" class="flex-1 px-4 py-3 rounded-lg font-darker-grotesque" required>
            <button type="submit" class="bg-saikou-primary text-saikou-secondary px-8 py-3 rounded-lg font-darker-grotesque font-semibold hover:bg-saikou-accent hover:text-white transition-all">
                Notify Me
            </button>
        </form>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-space-grotesk font-bold text-center text-saikou-secondary mb-12">Contact Us</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
                <h3 class="font-space-grotesk font-semibold text-saikou-secondary mb-2">Company</h3>
                <p class="text-gray-600 font-darker-grotesque">Saikou</p>
            </div>
            <div class="text-center">
                <h3 class="font-space-grotesk font-semibold text-saikou-secondary mb-2">Phone</h3>
                <p class="text-gray-600 font-darker-grotesque">92742 38391</p>
            </div>
            <div class="text-center">
                <h3 class="font-space-grotesk font-semibold text-saikou-secondary mb-2">Email</h3>
                <p class="text-gray-600 font-darker-grotesque">
                    <a href="mailto:info@saikoushop.com" class="hover:text-saikou-accent">info@saikoushop.com</a><br>
                    <a href="mailto:care@saikoushop.com" class="hover:text-saikou-accent">care@saikoushop.com</a>
                </p>
            </div>
            <div class="text-center">
                <h3 class="font-space-grotesk font-semibold text-saikou-secondary mb-2">Location</h3>
                <p class="text-gray-600 font-darker-grotesque">India</p>
            </div>
        </div>
    </div>
</section>

<!-- Cart Notification -->
<div id="cart-notification" class="fixed top-20 right-4 bg-saikou-primary text-saikou-secondary p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 z-50">
    <p class="font-darker-grotesque font-semibold">Item added to cart!</p>
</div>

<script>
// Slideshow functionality
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("nav-dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

// Auto-advance slideshow
setInterval(function() {
    plusSlides(1);
}, 5000);

// Shopping Cart functionality
let cart = JSON.parse(localStorage.getItem('saikou-cart') || '[]');
let cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            addToCart(productId);
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thanks for subscribing! We\'ll notify you about new releases.');
        this.reset();
    });
});

function addToCart(productId) {
    const products = {
        '1': {
            id: '1',
            name: 'Superman Premium Action Figure',
            price: 4999,
            image: '<?php echo get_template_directory_uri(); ?>/assets/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png'
        },
        '2': {
            id: '2',
            name: 'Hulk Patreon Edition Statue',
            price: 6499,
            image: '<?php echo get_template_directory_uri(); ?>/assets/8940d71d-abcb-4bb1-898b-4e5efeb18613.png'
        },
        '3': {
            id: '3',
            name: 'Anime Hero Premium Figure',
            price: 3999,
            image: '<?php echo get_template_directory_uri(); ?>/assets/f753d099-696b-46b8-a5ec-44a8a086abb7.png'
        }
    };
    
    const product = products[productId];
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    localStorage.setItem('saikou-cart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification();
}

function updateCartCount() {
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function showCartNotification() {
    const notification = document.getElementById('cart-notification');
    notification.style.transform = 'translateX(0)';
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
    }, 3000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
</script>

<?php get_footer(); ?>
