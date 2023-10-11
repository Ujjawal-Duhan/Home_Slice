// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('#cart-items');
    const cartTotal = document.querySelector('#cart-total');
    const paymentOptions = document.querySelector('#payment-options');
    const checkoutButton = document.querySelector('#checkout-button');

    let totalAmount = 0; // Initialize total amount to zero

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h5').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.split('₹')[1]);

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - ₹${productPrice}`;
            // Create a Remove button for the cart item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', () => {
                // Remove the item from the cart when the Remove button is clicked
                cartItem.remove();
                totalAmount -= productPrice;
                cartTotal.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
                updatePaymentOptions();
            });

            // Append the Remove button to the cart item
            cartItem.appendChild(removeButton);

            cartItems.appendChild(cartItem);

            // Add the item's price to the total
            totalAmount += productPrice;
            cartTotal.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
            updatePaymentOptions();
        });
    });

    function updatePaymentOptions() {
        // Display the total amount in the payment section
        paymentOptions.innerHTML = `
            <!-- Add payment options here -->
            <button id="checkout-button">Checkout</button>
        `;
    }
});