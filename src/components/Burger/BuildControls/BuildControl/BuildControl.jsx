import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button 
                className='Remove' 
                onClick={props.remove} 
                disabled={props.disabled}><i className="fas fa-minus"></i></button>
            <button 
                className='Add' 
                onClick={props.add}><i className="fas fa-plus"></i></button>
        </div>
    );
};

export default BuildControl;