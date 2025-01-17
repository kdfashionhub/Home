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
