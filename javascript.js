let cart = [];

function addToCart(productName, price) {
    const item = {
        name: productName,
        price: price
    };

    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear the cart list
    cartList.innerHTML = '';

    let totalAmount = 0;

    // Populate the cart list and calculate the total amount
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price.toFixed(2)}`;

        cartList.appendChild(listItem);

        // Add the price to the total amount
        totalAmount += item.price;
    });

    // Display the total amount
    cartTotal.textContent = `${totalAmount.toFixed(2)}`;
}

  