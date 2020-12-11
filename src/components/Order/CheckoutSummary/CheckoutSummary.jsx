import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return(
        <div className='CheckoutSummary'>
            <h1>Looks tasty!</h1>
            <div style={{width: '300px', height: '300px'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger'>Cancel</Button>
            <Button btnType='Success'>Continue</Button>
        </div>
    );
};

export default CheckoutSummary;