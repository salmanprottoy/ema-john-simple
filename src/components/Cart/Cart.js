import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice += product.price;
    }
    let shippingCost = 0
    if(totalPrice > 35){
        shippingCost = 0;
    }
    else if(totalPrice > 15){
        shippingCost = 4.99;
    }
    else if(totalPrice > 0){
        shippingCost = 12.99;
    }

    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);

    const formatNumber = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: ${shippingCost}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;