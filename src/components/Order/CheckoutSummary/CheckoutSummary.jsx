import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return(
        <div className='CheckoutSummary'>
            <h1>Looks tasty!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <div className='CheckoutButtons'>
                <Button btnType='Button Danger'>Cancel</Button>
                <Button btnType='Button Success'>Continue</Button>
            </div>
        </div>
    );
};

export default CheckoutSummary;