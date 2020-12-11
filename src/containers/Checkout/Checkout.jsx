import React, { useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

const Checkout = () => {
const [ingredients, setIngredients] = useState({
    lettuce: 1,
    bacon: 1,
    cheese: 1,
    meat: 1
});
    return ( 
        <CheckoutSummary ingredients={ingredients} />
    );
};

export default Checkout;