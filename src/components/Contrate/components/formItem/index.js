import React from 'react';
import './style.css';

import { FiChevronRight } from "react-icons/fi";
import InputMask from 'react-input-mask';

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


                <InputMask mask={props.mask} id={props.idForm} placeholder={props.placeholder} autoComplete="none" onChange={props.onChange} value={props.valueForm}/>
                {/* <input id={props.idForm} type="text" placeholder={props.placeholder} autoComplete="none" onChange={props.onChange} value={props.valueForm} /> */}

            </div>

        </div>
    );
}

export default FormIntem;