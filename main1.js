// main.js
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');
            const productImage = this.getAttribute('data-product-image'); // Get the image URL
            const message = `I would like to buy the *${productName}* for ${productPrice}.\n\nCheck out the image: ${productImage}`;
            const whatsappNumber = '919887481882'; // Replace with your WhatsApp number
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappLink, '_blank');
        });
    });
});