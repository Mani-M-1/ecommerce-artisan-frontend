import React, { useState } from 'react';
import axios from 'axios';

function OrderConfirmation({ cart, user }) {
    const [loading, setLoading] = useState(false);

    const placeOrder = async () => {
        setLoading(true);
        try {
            await axios.post('/api/orders/create', {
                customerId: user.id,
                items: cart.items,
                totalPrice: cart.totalPrice,
                address: user.address,
                paymentType: 'Online', // Example payment type
            });
            alert('Order placed successfully');
        } catch (error) {
            alert('Error placing order');
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>Confirm Your Order</h1>
            <button onClick={placeOrder} disabled={loading}>
                {loading ? 'Placing Order...' : 'Place Order'}
            </button>
        </div>
    );
}

export default OrderConfirmation;
