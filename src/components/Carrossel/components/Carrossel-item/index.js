import React from 'react';
import './style.css';

function Item(props) {
    return (

        <div className='linkItemCarrossel'>
            <div className="card ItemCarrossel p-4">
                <props.icon />
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
            </div>
        </div>

    );
}

export default Item;