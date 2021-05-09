import React from 'react';
import './style.css';

function Card(props) {

    const saibaMais = props.saibaMais === 'true' ? "card p-4 saiba-mais": "card p-4";
   

    return (
        <section className="col-12 col-sm-6 col-md-4 mt-4">
            <a href={props.url} className='linkCard'>
                <div className={saibaMais}>
                    <props.icon />
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                </div>
            </a>
        </section>
    );
}

export default Card;