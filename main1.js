// main.js
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');
            const productImage = this.getAttribute('data-product-image');

            // Debugging logs
            console.log('Product Name:', productName);
            console.log('Product Price:', productPrice);
            console.log('Product Image:', productImage);

            // Check if any of the values are null
            if (!productName || !productPrice || !productImage) {
                console.error('One or more product details are missing.');
                return; // Exit if any value is null
            }

            const message = `I would like to buy the *${productName}* for ${productPrice}.\n\nCheck out the image: ${productImage}`;
            const whatsappNumber = '917302499398'; // Replace with your WhatsApp number
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappLink, '_blank');
        });
    });
});
