import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Lettuce', type:'lettuce'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const BuildControls = (props) => {
    return (
        <div className='BuildControls'>
            {controls.map(ingr => (
                <BuildControl 
                    key={ingr.label} 
                    label={ingr.label} 
                    add={() => props.add(ingr.type)}
                    remove={() => props.remove(ingr.type)}
                    disabled={props.disabled[ingr.type]} />
            ))}
            <h5>Price: ${props.price.toFixed(2)}</h5>
            <button 
                className='OrderButton' 
                disabled={!props.purchase} 
                onClick={props.checkout}>Add to Cart</button>
        </div>
    );
};

export default BuildControls;