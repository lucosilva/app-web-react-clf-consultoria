import React from 'react';
import './style.css';

import { FiChevronRight } from "react-icons/fi";

function FormIntem(props) {

    function open(event) {
        const el = event.target.parentNode.parentNode;
        const elButtonInput = el.querySelector('.button-input');    
        elButtonInput.classList.add('openForm');
    }

    return (
        <div className="form-item">
            <label htmlFor={props.idForm} >
                <div onClick={open} className="button-input">
                    <span>{props.titleButton}</span>
                    <FiChevronRight />
                </div>
            </label>
            <div className="input">
                <span>{props.titleInput}</span>
                <input id={props.idForm} type="text" placeholder={props.placeholder} autoComplete="none"/>
            </div>
            
        </div>
    );
}

export default FormIntem;