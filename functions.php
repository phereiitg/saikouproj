
<?php
/**
 * Saikou WordPress Theme Functions
 * 
 * @package Saikou
 */

// Theme setup
function saikou_theme_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'saikou'),
        'footer' => __('Footer Menu', 'saikou'),
    ));
}
add_action('after_setup_theme', 'saikou_theme_setup');

// Enqueue styles and scripts
function saikou_enqueue_assets() {
    // Enqueue theme stylesheet
    wp_enqueue_style('saikou-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('saikou-fonts', 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Darker+Grotesque:wght@400;500;600;700&display=swap', array(), null);
    
    // Enqueue theme JavaScript
    wp_enqueue_script('saikou-script', get_template_directory_uri() . '/assets/script.js', array(), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('saikou-script', 'saikou_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('saikou_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'saikou_enqueue_assets');

// Add custom image sizes
function saikou_custom_image_sizes() {
    add_image_size('product-thumbnail', 400, 400, true);
    add_image_size('product-large', 800, 800, true);
    add_image_size('hero-image', 1200, 600, true);
}
add_action('after_setup_theme', 'saikou_custom_image_sizes');

// Custom excerpt length
function saikou_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'saikou_excerpt_length');

// Custom excerpt more
function saikou_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'saikou_excerpt_more');

// Add custom body classes
function saikou_body_classes($classes) {
    if (is_home() || is_front_page()) {
        $classes[] = 'saikou-home';
    }
    return $classes;
}
add_filter('body_class', 'saikou_body_classes');

// Register widget areas
function saikou_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'saikou'),
        'id'            => 'footer-widgets',
        'description'   => __('Add widgets here to appear in your footer.', 'saikou'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'saikou_widgets_init');

// AJAX handler for newsletter subscription
function saikou_newsletter_subscription() {
    check_ajax_referer('saikou_nonce', 'nonce');
    
    $email = sanitize_email($_POST['email']);
    
    if (is_email($email)) {
        // Here you would typically save to database or send to email service
        // For now, we'll just return success
        wp_send_json_success(array('message' => 'Thank you for subscribing!'));
    } else {
        wp_send_json_error(array('message' => 'Please enter a valid email address.'));
    }
}
add_action('wp_ajax_newsletter_subscription', 'saikou_newsletter_subscription');
add_action('wp_ajax_nopriv_newsletter_subscription', 'saikou_newsletter_subscription');

// Remove unnecessary WordPress features
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Security enhancements
function saikou_remove_version_info() {
    return '';
}
add_filter('the_generator', 'saikou_remove_version_info');

// Optimize WordPress
function saikou_optimize_wp() {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
}
add_action('init', 'saikou_optimize_wp');
