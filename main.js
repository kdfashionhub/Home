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
