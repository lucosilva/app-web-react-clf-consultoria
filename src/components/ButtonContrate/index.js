import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function ButtonContrate(props) {    
    return (
        <Link className={props.classe} to={props.link}>        
            {props.children}
        </Link>
    )
}

export default ButtonContrate;