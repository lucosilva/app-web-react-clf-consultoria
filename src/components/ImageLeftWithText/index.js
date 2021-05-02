import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiArrowUpLeft } from "react-icons/fi";


import bg from '../../assets/outros/BG.png';

function ImageWithText(props) {
    return (
        <section className='container-image-with-text bg-white'>
            <div className="container">
                <div className="container-img">
                    <div className="detalheDown">
                        <img src={bg} alt="" />
                    </div>

                    <img src={props.imagem} className='destaque' />

                    <div className="detalheUp">
                        <img src={bg} alt="" />
                    </div>
                </div>
                <div className="context">
                    <span className='hastag'>{props.hastag}</span>
                    <h2>{props.title}</h2>

                    <p>{props.description}</p>

                    {props.button === 'off' ? null : <Link to={props.buttonUrl}> <FiArrowUpLeft /> {props.cta} </Link>}

                </div>
            </div>
        </section>
    );
}

export default ImageWithText;