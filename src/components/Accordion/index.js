import React from 'react';
import Item from '../Carrossel/components/Carrossel-item';
import './style.css';

function Accordion(props) {
    const listAccordion = [...props.children];
    return (
        <section class="accordion" id={props.idFaq}>
            <div className="container">
                {
                    listAccordion.map((item)=>{
                        return (
                            <div class="accordion-item">
                                <h2 class="accordion-header" id={item.cardId}>
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#' + item.collapseId} aria-expanded={Item.expanded} aria-controls={item.collapseId}>
                                        {item.title}
                                    </button>
                                </h2>
                                <div id={item.collapseId} class="accordion-collapse collapse" aria-labelledby={item.cardId} data-bs-parent={'#' + props.idFaq}>
                                    <div class="accordion-body">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }     
            </div>
        </section>
    );
}

export default Accordion;