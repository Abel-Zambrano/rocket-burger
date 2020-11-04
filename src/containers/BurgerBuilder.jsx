import React, { useState } from 'react';
import Burger from '../components/Burger/Burger';

const BurgerBuilder = () => {
    const [ ingredients, setIngredients ] = useState({
        lettuce: 1,
        bacon: 0,
        cheese: 4,
        meat: 1
    });

    return (
        <>
            <Burger ingredients={ingredients} />
            <div>Build Controls</div>
        </>
    );
}


    
    

export default BurgerBuilder;