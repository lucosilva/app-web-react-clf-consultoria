import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { FiArrowUpLeft } from "react-icons/fi";


import bg_img from '../../assets/outros/BG.png';

function ImageRightWithText (props) {

    const classeSection = 'container-imageRight-with-text '+ props.bg;

    return (
        <section className={classeSection}>
            <div className="container">

                <div className="context">
                    <span className='hastag'>{props.hastag}</span>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>

                    {props.button === 'off' ? null : <Link to={props.url}> {props.cta} <FiArrowUpLeft /> </Link>}

                </div>

                <div className="container-img">
                    <div className="detalheDown">
                        <img src={bg_img} alt="" />
                    </div>

                    <img src={props.imagem} className='destaque' alt='' />

                    <div className="detalheUp">
                        <img src={bg_img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageRightWithText ;