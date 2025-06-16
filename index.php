
<?php
/**
 * The main template file for Saikou WordPress theme
 * 
 * @package Saikou
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Darker+Grotesque:wght@400;500;600;700&display=swap">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Header Section -->
<header class="site-header">
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <h1 class="brand-name">Saikou</h1>
                <span class="brand-tagline">Made in India</span>
            </div>
            <div class="navbar-menu">
                <a href="#collections" class="nav-link">Collections</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#contact" class="nav-link">Contact</a>
                <button class="cart-btn">
                    <span class="cart-icon">🛒</span>
                    <span class="cart-count">0</span>
                </button>
            </div>
            <button class="mobile-menu-toggle">☰</button>
        </div>
    </nav>
</header>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">Sculpted with Love. And Way Too Much Time.</h1>
            <p class="hero-subtitle">Premium collectible action figures inspired by anime, superheroes, gaming legends, and mythical icons. Proudly designed and crafted in India.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary">Explore Collections</button>
                <button class="btn btn-secondary">New Arrivals</button>
            </div>
        </div>
        <div class="hero-features">
            <div class="feature">
                <h3>Made Here. Not Meh.</h3>
                <p>Proudly made in India with global-quality standards</p>
            </div>
            <div class="feature">
                <h3>Details So Good, It's Rude.</h3>
                <p>From facial expressions to fabric folds, we obsess over every pixel</p>
            </div>
            <div class="feature">
                <h3>For Collectors, Not Kids.</h3>
                <p>Display-worthy, conversation-starting collectibles</p>
            </div>
        </div>
    </div>
</section>

<!-- Collections Section -->
<section id="collections" class="collections">
    <div class="container">
        <h2 class="section-title">Our Collections</h2>
        <div class="collections-grid">
            <div class="collection-card">
                <div class="collection-info">
                    <h3 class="collection-name">Saikou</h3>
                    <p class="collection-description">Our flagship collection of full-sized, high-quality action figures—designed for fans who want more than just a toy. From anime action figures and superhero statues to gaming collectibles and legendary characters.</p>
                    <div class="collection-features">
                        <span class="feature-tag">Full-Size Glory</span>
                        <span class="feature-tag">Dynamic Poses</span>
                        <span class="feature-tag">Premium Finishes</span>
                    </div>
                </div>
            </div>
            <div class="collection-card">
                <div class="collection-info">
                    <h3 class="collection-name">Ikon</h3>
                    <p class="collection-description">Our exclusive collection of premium bust-style collectible figures—designed to deliver high-impact character presence in a compact, display-friendly format. Perfect for collectors, desk displays, or gifting.</p>
                    <div class="collection-features">
                        <span class="feature-tag">Bust-Style</span>
                        <span class="feature-tag">Compact Display</span>
                        <span class="feature-tag">Bold Style</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Featured Products Section -->
<section class="featured-products">
    <div class="container">
        <h2 class="section-title">Featured Products</h2>
        <div class="products-grid" id="products-container">
            <!-- Sample Product 1 -->
            <div class="product-card" data-product-id="1">
                <div class="product-image">
                    <img src="/lovable-uploads/0c7e4678-ab10-4c01-960c-04634cda2647.png" alt="Superman Figurine - Man of Steel" loading="lazy">
                    <div class="product-badge">Premium</div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Superman Figurine – Man of Steel</h3>
                    <p class="product-collection">Premium Action Figure by Saikou</p>
                    <p class="product-price">₹4,999</p>
                    <p class="product-description">Strike a pose with the Last Son of Krypton! This Man of Steel action figure by Saikou is a full-sized, high-detail collectible built for bold shelves and true fans.</p>
                    <button class="btn btn-primary add-to-cart" data-product-id="1">Add to Cart</button>
                </div>
            </div>

            <!-- Sample Product 2 -->
            <div class="product-card" data-product-id="2">
                <div class="product-image">
                    <img src="/lovable-uploads/0c8687cf-bb02-4e2f-b535-81fda09f22d7.png" alt="Sung Jin-Woo Figurine - Shadow Monarch Edition" loading="lazy">
                    <div class="product-badge">Limited</div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">Sung Jin-Woo Shadow Monarch Edition</h3>
                    <p class="product-collection">Premium Anime Action Figure by Saikou</p>
                    <p class="product-price">₹5,499</p>
                    <p class="product-description">From Solo Leveling to shelf domination—this full-sized Sung Jin-Woo action figure captures the Shadow Monarch in mid-attack, dark aura and all.</p>
                    <button class="btn btn-primary add-to-cart" data-product-id="2">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="about">
    <div class="container">
        <div class="about-content">
            <h2 class="section-title">Who We Are</h2>
            <div class="about-text">
                <p class="about-intro">At Saikou, we're not just making action figures—we're bringing your favorite characters to life, one sculpt at a time.</p>
                <p>Born out of pure fandom and frustration (ever paid way too much for a flimsy imported figure?) Saikou was created to give Indian fans the quality they deserve—without the wait, the customs drama, or the disappointing paint jobs.</p>
                <p>From anime action figures and superhero collectibles to gaming icons and mythical legends, everything we make is built with care, crafted in India, and designed to look damn good on your shelf. Whether you're a serious collector or just searching for the perfect gift, we make characters that feel personal—and figures that feel premium.</p>
                <p class="about-closing">We sweat the small stuff. We obsess over details. And yes, we take way too long perfecting things. But that's what happens when you're fans first, makers second.</p>
                <p class="brand-promise"><strong>Welcome to Saikou. Collectibles that actually live up to the hype.</strong></p>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="newsletter">
    <div class="container">
        <div class="newsletter-content">
            <h2 class="newsletter-title">Help Us Make Cooler Stuff</h2>
            <p class="newsletter-subtitle">New figurines loading... Smash that "Notify Me" button like it owes you money!</p>
            <form class="newsletter-form" id="newsletter-form">
                <input type="email" class="newsletter-input" placeholder="Your email address" required>
                <button type="submit" class="btn btn-primary">Notify Me</button>
            </form>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact">
    <div class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-item">
                    <h3>Company</h3>
                    <p>Saikou</p>
                </div>
                <div class="contact-item">
                    <h3>Phone</h3>
                    <p>92742 38391</p>
                </div>
                <div class="contact-item">
                    <h3>Email</h3>
                    <p><a href="mailto:info@saikoushop.com">info@saikoushop.com</a></p>
                    <p><a href="mailto:care@saikoushop.com">care@saikoushop.com</a> (Customer care)</p>
                </div>
                <div class="contact-item">
                    <h3>Location</h3>
                    <p>India</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-brand">
                <h3>Saikou</h3>
                <p>Premium collectibles. Made in India.</p>
            </div>
            <div class="footer-links">
                <a href="#collections">Collections</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="mailto:info@saikoushop.com">Support</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Saikou. All rights reserved. Proudly made in India.</p>
        </div>
    </div>
</footer>

<!-- Cart Notification -->
<div id="cart-notification" class="cart-notification hidden">
    <p>Item added to cart!</p>
</div>

<script>
// Shopping Cart Functionality
let cart = [];
let cartCount = 0;

// Add to cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.querySelector('.cart-count');
    const cartNotification = document.getElementById('cart-notification');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Add to cart array
            cart.push({
                id: productId,
                name: productName,
                price: productPrice
            });
            
            // Update cart count
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Show notification
            showCartNotification();
            
            console.log('Added to cart:', productName);
            console.log('Current cart:', cart);
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        alert('Thanks for subscribing! We\'ll notify you about new releases.');
        this.reset();
        console.log('Newsletter subscription:', email);
    });
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    mobileToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function showCartNotification() {
    const notification = document.getElementById('cart-notification');
    notification.classList.remove('hidden');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hidden');
    }, 3000);
}

// Hero buttons functionality
document.querySelector('.hero-buttons .btn-primary').addEventListener('click', function() {
    document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.hero-buttons .btn-secondary').addEventListener('click', function() {
    document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
});
</script>

<?php wp_footer(); ?>
</body>
</html>
