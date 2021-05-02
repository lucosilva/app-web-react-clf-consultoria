import React from 'react';
import './style.css';
import { FiArrowUpLeft } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import bg from '../../assets/outros/BG.png';

function ImageRightWithText(props) {
    return (
        <section className='container-imageRight-with-text bg-white'>
            <div className="container">

                <div className="context">
                    <span className='hastag'>{props.hastag}</span>
                    <h2>{props.title}</h2>

                    <div className="contact">
                        <div className="contact-item">
                            <div className="icon">
                                <FiPhoneCall />
                            </div>

                            <div>
                                <h3>Telefone</h3>
                                <p>{props.telNumber}</p>
                                <p>{props.telObs}</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <FiMail />
                            </div>

                            <div>
                                <h3>E-mail</h3>
                                <p>{props.mail}</p>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-img">
                    <div className="detalheDown">
                        <img src={bg} alt="" />
                    </div>

                    <img src={props.imagem} className='destaque' />

                    <div className="detalheUp">
                        <img src={bg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageRightWithText;