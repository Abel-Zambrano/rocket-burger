import React from 'react';
import Button from '../../UI/Button/Button';

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
        <div>
            <h3>Your Order Summary</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Your total is: ${props.total.toFixed(2)}</strong></p>
            <p>Ready to Checkout?</p>
            <Button btnType='Button Danger' clicked={props.modalCancel}>Cancel</Button>
            <Button btnType='Button Success' clicked={props.continue}>Continue</Button>
        </div>
    );
};

export default OrderSummary;