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
            <Button className='Button Danger'>Cancel</Button>
            <Button classname='Button Success'>Continue</Button>
        </div>
    );
};

export default CheckoutSummary;