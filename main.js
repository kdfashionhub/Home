// Placeholder for future JavaScript functionality
console.log("Welcome to Your Clothing and Shoe Store!");

// JavaScript to toggle the menu
document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

// Select all buy buttons
const buyButtons = document.querySelectorAll('.buy-button');

// Add click event listener to each button
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get product details from data attributes
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        const productLink = "http://example.com/product-link"; // Replace with actual product link

        // Construct WhatsApp message
        const message = `*Product Name:* ${productName}\n*Price:* ${productPrice}\n*Link:* ${productLink}`;
        
        // WhatsApp API URL with your number
        const whatsappUrl = `https://wa.me/919887481882?text=${encodeURIComponent(message)}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});
