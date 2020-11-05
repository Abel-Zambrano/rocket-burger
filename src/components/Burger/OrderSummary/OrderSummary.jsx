import React from 'react';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey, index) => {
            return (
                // props.ingredients[igKey], gets value of key
                <li key={index}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
                </li> 
        )});
    console.log(ingredientSummary);
    

    return (
        <>
            <h3>Your Order Summary</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Ready to Checkout?</p>
        </>
    );
};

export default OrderSummary;