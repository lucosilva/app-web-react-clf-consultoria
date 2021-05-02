import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import OptionMenu from '../OptionMenu';

import { FiChevronDown } from "react-icons/fi";

function ButtonItemMenu(props) {

    return (
        <li onClick={props.onClick}>
            {props.icon === 'active' ? <span>{props.titulo} <FiChevronDown /></span> : <Link to={props.url}>{props.titulo}</Link>}
            {props.icon === 'active' ? <OptionMenu idMenu={props.idMenu} titleMenu={props.titleMenu} listItem={props.children} /> : null}
        </li>        
    )
}


export default ButtonItemMenu;