//eslint no-use-before-define: 0

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiArrowUpLeft } from "react-icons/fi";


import bg from '../../assets/outros/BG.png';

function ImageWithText(props) {

    const classeSection = 'container-image-with-text '+ props.bg;
    
    return (
        <section className={classeSection}>
            <div className="container">
                <div className="container-img">
                    <div className="detalheDown">
                        <img src={bg} alt="" />
                    </div>
                    {/* // eslint-disable-next-line */}
                    <img src={props.imagem} className='destaque' alt='' />

                    <div className="detalheUp">
                        <img src={bg} alt="" />
                    </div>
                </div>
                <div className="context">
                    <span className='hastag'>{props.hastag}</span>
                    <h2>{props.title}</h2>

                    <p>{props.description}</p>

                    {props.button === 'off' ? null : props.button === 'maps' ? <a  rel="noreferrer" target="_blank" href={props.buttonUrl}> <FiArrowUpLeft /> {props.cta} </a> : <Link to={props.buttonUrl}> <FiArrowUpLeft /> {props.cta} </Link>}                    

                </div>
            </div>
        </section>
    );
}

export default ImageWithText;