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


   document.getElementById('menu-button').addEventListener('click', function() {
      document.getElementById('menu').classList.toggle('hidden');
    });

    function redirectToWhatsApp(productName, productPrice) {
      const message = `I'm interested in the ${productName} for $${productPrice}`;
      const url = `https://wa.me/919887481882?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    }
