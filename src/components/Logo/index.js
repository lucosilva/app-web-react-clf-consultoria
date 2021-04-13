import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo/clf-logo-black.png';

function Logo(props) {
    const classText = ' text';
    
    return (
        <Link className={props.classe} to={props.link}>
            <img src={logoImg} alt="Logo" />

            <p className={props.animate + classText} >
                {props.children}
            </p>
        </Link>
    )
}

export default Logo;