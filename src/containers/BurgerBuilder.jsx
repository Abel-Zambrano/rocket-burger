import React, { useState } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../axios-orders';
import Spinner from '../components/UI/Spinner/Spinner';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    lettuce: 0.99,
    bacon: 1.99,
    cheese: 1.35,
    meat: 2.49
};

const BurgerBuilder = () => {
    // State =================================================================
    const [ price, setPrice ] = useState(5);
    const [ checkout, setCheckout ] = useState(false);
    const [ purchasing, setPurchasing ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ ingredients, setIngredients ] = useState({
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }  
    );

    const updateCheckoutState = (newIngredients) => {
        const sum = Object.keys(newIngredients)
            .map(igKey => {
                return newIngredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        setCheckout(sum > 0); // Boolean

    }
    
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
        updateCheckoutState(updatedIngredients);
    };

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        if ( oldCount === 0) {
            console.log(oldCount);
            return;    
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const deductPrice = INGREDIENT_PRICES[type];
        const oldPrice = price;
        const newPrice = oldPrice - deductPrice;
        setPrice(newPrice);
        setIngredients(updatedIngredients);
        updateCheckoutState(updatedIngredients);
    };

    const purchasingHandler = () => {
        setPurchasing(true);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        // alert('Enjoy your burger!!')
        setLoading(true);
        const order = {
            ingredients: ingredients,
            price: price,
            customer: {
                name: 'Samuel Stone',
                address: {
                    street: '123 Willow Blvd',
                    city: 'San Francisco',
                    state: 'CA',
                    zip: 94545,
                },
                email: 'samstone20@gmail.com',
                delivery: 'no',
                pickup: 'asap'
            }
        }
        // .json endpoint for firebase
        axios.post('/orders.json', order) 
            .then(res => {
                setLoading(false)
                setPurchasing(false)
            })
            .catch(err => {
                setLoading(false)
                setPurchasing(false)
            });
    }

    const disabledButton = {
        ...ingredients
    };
    for (let value in disabledButton) {
        disabledButton[value] = disabledButton[value] <= 0
    }

    let orderSummary = <OrderSummary 
        ingredients={ingredients} 
        modalCancel={purchaseCancelHandler}
        continue={purchaseContinueHandler}
        total={price}/>;
    if (loading) {
        orderSummary = <Spinner />
    }
        
    //Render ===================================================================
    return (
        
        <>
            <Modal show={purchasing} modalCancel={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls 
                add={addIngredientHandler} 
                remove={removeIngredientHandler}
                disabled={disabledButton}
                purchase={checkout}
                checkout={purchasingHandler}
                price={price} />
        </>
    );
}

export default withErrorHandler(BurgerBuilder, axios);