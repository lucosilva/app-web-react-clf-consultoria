import React from 'react';
import './style.css';

function Item(props) {
    const saibaMais = props.saibaMais === 'true' ? "card ItemCarrossel p-4 saiba-mais": "card ItemCarrossel p-4";
    
    return (
        <div className="linkItemCarrossel">
            <div className={saibaMais}>
                <props.icon />
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
            </div>
        </div>

    );
}

export default Item;