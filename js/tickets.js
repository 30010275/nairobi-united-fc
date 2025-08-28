// tickets.js - Complete Ticket Purchasing System

document.addEventListener('DOMContentLoaded', function() {
    // Cart state
    let cart = [];
    let currentMatch = '';
    
    // DOM Elements
    const matchSelect = document.getElementById('match-select');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total h4');
    const checkoutBtn = document.querySelector('.cart-total .btn');
    const ticketOptions = document.querySelectorAll('.ticket-option');
    
    // Initialize
    updateCartDisplay();
    
    // Event Listeners
    matchSelect.addEventListener('change', function() {
        currentMatch = this.value;
        updateMatchInCart();
    });
    
    // Add to Cart buttons
    ticketOptions.forEach(option => {
        const addBtn = option.querySelector('.btn');
        const quantityInput = option.querySelector('.quantity-input');
        const price = parseFloat(option.querySelector('.price').textContent.replace('KSh ', '').replace(',', ''));
        const ticketType = option.querySelector('h4').textContent;
        
        addBtn.addEventListener('click', function() {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 0 && currentMatch) {
                addToCart(currentMatch, ticketType, price, quantity);
                quantityInput.value = 0; // Reset quantity
            } else {
                alert('Please select a match and quantity first!');
            }
        });
    });
    
    // Cart Functions
    function addToCart(match, type, price, quantity) {
        const matchText = getMatchText(match);
        const existingItem = cart.find(item => 
            item.match === matchText && item.type === type
        );
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                match: matchText,
                type: type,
                price: price,
                quantity: quantity
            });
        }
        
        updateCartDisplay();
    }
    
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
    
    function updateMatchInCart() {
        if (cart.length > 0 && currentMatch) {
            const matchText = getMatchText(currentMatch);
            cart.forEach(item => {
                item.match = matchText;
            });
            updateCartDisplay();
        }
    }
    
    function getMatchText(matchValue) {
        const options = matchSelect.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === matchValue) {
                return options[i].text;
            }
        }
        return matchValue;
    }
    
    function updateCartDisplay() {
        // Clear cart display
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = 'Total: KSh 0';
            checkoutBtn.disabled = true;
            checkoutBtn.textContent = 'Proceed to Checkout';
            return;
        }
        
        // Calculate total
        let total = 0;
        
        // Add items to cart display
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-content">
                    <h5>${item.match}</h5>
                    <p>${item.type} - KSh ${item.price.toLocaleString()}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p class="item-total">KSh ${itemTotal.toLocaleString()}</p>
                </div>
                <button class="remove-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Update total and enable checkout
        cartTotal.textContent = `Total: KSh ${total.toLocaleString()}`;
        checkoutBtn.disabled = false;
        checkoutBtn.textContent = 'Proceed to Checkout';
        
        // Add remove button event listeners
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeFromCart(index);
            });
        });
    }
    
    // Checkout Process
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) return;
        
        // Create checkout modal
        const modal = document.createElement('div');
        modal.className = 'checkout-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Complete Your Purchase</h3>
                <form id="checkout-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number (M-Pesa)</label>
                        <input type="tel" id="phone" name="phone" placeholder="07XX XXX XXX" required>
                    </div>
                    <div class="order-summary">
                        <h4>Order Summary</h4>
                        ${cart.map(item => `
                            <div class="summary-item">
                                <span>${item.type} x${item.quantity}</span>
                                <span>KSh ${(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                        `).join('')}
                        <div class="summary-total">
                            <strong>Total: KSh ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</strong>
                        </div>
                    </div>
                    <div class="modal-buttons">
                        <button type="button" class="btn btn-secondary" id="cancel-checkout">Cancel</button>
                        <button type="submit" class="btn btn-primary">Pay with M-Pesa</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Modal event listeners
        document.getElementById('cancel-checkout').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            processPayment(this);
        });
    });
    
    function processPayment(form) {
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        
        // Show processing state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        // Simulate M-Pesa payment processing
        setTimeout(() => {
            // Show success message
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `
                <div class="payment-success">
                    <i class="fas fa-check-circle"></i>
                    <h3>Payment Successful!</h3>
                    <p>Your tickets have been purchased successfully.</p>
                    <p>A confirmation has been sent to ${email}</p>
                    <div class="order-details">
                        <h4>Order Details:</h4>
                        <p><strong>Reference:</strong> NUF-${Date.now()}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Total:</strong> KSh ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</p>
                    </div>
                    <button class="btn btn-primary" id="close-modal">Done</button>
                </div>
            `;
            
            document.getElementById('close-modal').addEventListener('click', function() {
                // Clear cart and close modal
                cart = [];
                updateCartDisplay();
                document.body.removeChild(document.querySelector('.checkout-modal'));
            });
        }, 2000);
    }
});

// Function to prompt for quantity and add to cart
function promptQuantity(ticketType, price) {
    const quantity = prompt(`How many ${ticketType} tickets would you like to purchase?`);
    if (quantity && !isNaN(quantity) && quantity > 0) {
        // Add to cart logic here
        addToCart(currentMatch, ticketType, price, parseInt(quantity));
    } else if (quantity !== null) {
        alert('Please enter a valid quantity.');
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-modal')) {
        document.body.removeChild(e.target);
    }
});
