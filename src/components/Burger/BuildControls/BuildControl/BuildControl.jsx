import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{props.label}</div>
            <button className='Remove'>Remove</button>
            <button className='Add'>Add</button>
        </div>
    );
};

export default BuildControl;