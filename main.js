// Placeholder for future JavaScript functionality
console.log("Welcome to Your Clothing and Shoe Store!");

// JavaScript to toggle the menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Function to redirect to WhatsApp with product details
function redirectToWhatsApp(productName, productPrice) {
    const message = `I'm interested in the ${productName} for $${productPrice.toFixed(2)}`;
    const url = `https://wa.me/919887481882?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}
