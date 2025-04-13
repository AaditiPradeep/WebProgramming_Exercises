// Product prices
const PRICES = {
    apple: 10,
    banana: 5,
    avocado: 7
};

// Form elements
const form = document.getElementById('groceryForm');
const orderForm = document.getElementById('orderForm');
const receipt = document.getElementById('receipt');

// Enable/disable quantity inputs based on checkbox state
document.querySelectorAll('.product-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const quantityInput = this.parentElement.querySelector('input[type="number"]');
        quantityInput.disabled = !this.checked;
        if (!this.checked) {
            quantityInput.value = '';
        }
    });
});

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Gather form data
    const orderData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phone1: document.getElementById('phone1').value,
        phone2: document.getElementById('phone2').value,
        email: document.getElementById('email').value,
        products: {
            apple: {
                checked: document.getElementById('apple').checked,
                quantity: document.getElementById('appleQty').value
            },
            banana: {
                checked: document.getElementById('banana').checked,
                quantity: document.getElementById('bananaQty').value
            },
            avocado: {
                checked: document.getElementById('avocado').checked,
                quantity: document.getElementById('avocadoQty').value
            }
        }
    };

    displayReceipt(orderData);
});

// Display receipt
function displayReceipt(data) {
    // Hide form and show receipt
    orderForm.classList.add('hidden');
    receipt.classList.remove('hidden');

    // Update customer details
    document.getElementById('receiptName').textContent = 
        `Name: ${data.firstName} ${data.lastName}`;
    document.getElementById('receiptPhone').textContent = 
        `Phone: ${data.phone1}-${data.phone2}`;
    document.getElementById('receiptEmail').textContent = 
        `Email: ${data.email}`;

    // Update order items
    const orderItems = document.getElementById('orderItems');
    orderItems.innerHTML = '';
    let total = 0;

    // Calculate and display each ordered item
    Object.entries(data.products).forEach(([product, details]) => {
        if (details.checked && details.quantity > 0) {
            const itemTotal = PRICES[product] * details.quantity;
            total += itemTotal;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'order-item';
            itemDiv.innerHTML = `
                <span>${product.charAt(0).toUpperCase() + product.slice(1)}</span>
                <span>${details.quantity} kg × $${PRICES[product]} = $${itemTotal}</span>
            `;
            orderItems.appendChild(itemDiv);
        }
    });

    // Update total
    document.getElementById('orderTotal').textContent = total;
}
