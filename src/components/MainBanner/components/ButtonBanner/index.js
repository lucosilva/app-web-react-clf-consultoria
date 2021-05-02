import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiArrowUpRight } from "react-icons/fi";

function ButtonBanner(props) {

    const mainClass = " buttonBanner ";
    const linkMobileClass = props.linkmobile === 'true' ? ' links-mobile ' : '' ;

    return (
        <Link to={props.url} className={mainClass + props.bgStyle + linkMobileClass}>
            {props.cta}
            <FiArrowUpRight />
        </Link>
    )
}

export default ButtonBanner;