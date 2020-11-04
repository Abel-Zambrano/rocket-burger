import React, { useState } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    lettuce: 0.99,
    bacon: 1.99,
    cheese: 1.35,
    meat: 2.49
};

const BurgerBuilder = () => {
    // State =================================================================
    const [ price, setPrice ] = useState(5)
    const [ ingredients, setIngredients ] = useState({
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }  
    );
    // Handlers ================================================================
    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const addPrice = INGREDIENT_PRICES[type];
        const oldPrice = price;
        const newPrice = oldPrice + addPrice;
        setPrice(newPrice);
        setIngredients(updatedIngredients);

    };

    const removeIngredientHandler = (type) => {

    };

    //Render ===================================================================
    return (
        <>
            <Burger ingredients={ingredients} />
            <BuildControls add={addIngredientHandler} />
        </>
    );
}

export default BurgerBuilder;