import React, { useEffect, useState } from 'react';
import './style.css';
import OptionMenu from '../OptionMenu';

import { FiChevronDown } from "react-icons/fi";

function ButtonItemMenu(props) {

    return (
        <li onClick={props.onClick}>
            {props.icon === 'active' ? <span>{props.titulo} <FiChevronDown /></span> : <a href={props.url}>{props.titulo}</a>}
            {props.icon === 'active' ? <OptionMenu idMenu={props.idMenu} listItem={props.children} /> : null}
        </li>        
    )
}


export default ButtonItemMenu;