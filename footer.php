
<?php
/**
 * The footer for Saikou WordPress theme
 * 
 * @package Saikou
 */
?>

<!-- Footer -->
<footer class="bg-saikou-secondary text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
                <div class="mb-4">
                    <h3 class="text-xl font-space-grotesk font-bold mb-2">Saikou</h3>
                    <p class="text-gray-300 font-darker-grotesque">Premium collectibles. Made in India.</p>
                </div>
            </div>
            
            <div>
                <h4 class="font-space-grotesk font-semibold mb-4">Quick Links</h4>
                <ul class="space-y-2 font-darker-grotesque">
                    <li><a href="#collections" class="text-gray-300 hover:text-saikou-primary transition-colors">Collections</a></li>
                    <li><a href="#about" class="text-gray-300 hover:text-saikou-primary transition-colors">About</a></li>
                    <li><a href="#contact" class="text-gray-300 hover:text-saikou-primary transition-colors">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-space-grotesk font-semibold mb-4">Collections</h4>
                <ul class="space-y-2 font-darker-grotesque">
                    <li><a href="#" class="text-gray-300 hover:text-saikou-primary transition-colors">Saikou Premium</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-saikou-primary transition-colors">Ikon Series</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-saikou-primary transition-colors">Limited Edition</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="font-space-grotesk font-semibold mb-4">Contact Info</h4>
                <div class="space-y-2 font-darker-grotesque text-gray-300">
                    <p>📞 92742 38391</p>
                    <p>📧 info@saikoushop.com</p>
                    <p>📍 India</p>
                </div>
            </div>
        </div>
        
        <div class="border-t border-gray-700 pt-8 text-center">
            <p class="text-gray-400 font-darker-grotesque">&copy; <?php echo date('Y'); ?> Saikou. All rights reserved. Proudly made in India.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
