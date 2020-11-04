import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button 
                className='Remove' 
                onClick={props.remove} 
                disabled={props.disabled}>Remove</button>
            <button 
                className='Add' 
                onClick={props.add} >Add</button>
        </div>
    );
};

export default BuildControl;