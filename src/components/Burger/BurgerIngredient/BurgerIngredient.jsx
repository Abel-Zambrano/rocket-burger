import React from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='BreadBottom'></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className='BreadTop'>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className='Meat'></div>;
            break;
        case ('cheese'):
            ingredient = <div className='Cheese'></div>;
            break;
        case ('lettuce'):
            ingredient = <div className='Lettuce'></div>;
            break;
        case ('bacon'):
            ingredient = <div className='Bacon'></div>;
            break;

    
        default:
            ingredient = null;
    }
    return ingredient;
};

// Ensures the correct prop type is passed and is required
BurgerIngredient.proptypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;