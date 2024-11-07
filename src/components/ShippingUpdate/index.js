import React, { useState } from 'react';
import axios from 'axios';

function AdminShippingUpdate({ orderId }) {
    const [status, setStatus] = useState('');

    const updateShipping = async () => {
        try {
            await axios.put('/api/orders/update-shipping', {
                orderId,
                shippingStatus: status,
            });
            alert('Shipping status updated');
        } catch (error) {
            alert('Error updating shipping status');
        }
    };

    return (
        <div>
            <h1>Update Shipping Status (Admin Only)</h1>
            <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Enter new shipping status"
            />
            <button onClick={updateShipping}>Update Status</button>
        </div>
    );
}

export default AdminShippingUpdate;
