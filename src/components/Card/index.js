import React from 'react';
import './style.css';

function Card(props) {
    return (
        <section className="col-12 col-sm-6 col-md-4 mt-4">
            <a href={props.url} className='linkCard'>
                <div className="card p-4">
                    <props.icon />
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                </div>
            </a>
        </section>
    );
}

export default Card;