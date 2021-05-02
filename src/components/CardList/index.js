import React from 'react';
import './style.css';
import Card from '../Card';

function CardList(props) {
    const listCards = [...props.children];
    
    return (
        <section className="card-list-container">
            <div className="title">
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
            <div className="container">
                <div className="row">     
                    {
                     listCards.map((dadoCard)=>{                        
                         return <Card key={dadoCard.title} url={dadoCard.url} icon={dadoCard.icon} title={dadoCard.title} subtitle={dadoCard.subtitle}/>
                     }) 
                    }               
                </div>
            </div>
        </section>
    );
}

export default CardList;