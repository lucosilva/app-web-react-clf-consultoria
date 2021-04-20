import React from 'react';
import './style.css';
import { FiArrowUpRight } from "react-icons/fi";

function ButtonBanner(props) {

    const mainClass = " buttonBanner ";
    const linkMobileClass = props.linkmobile == 'true' ? ' links-mobile ' : '' ;

    return (
        <a href={props.url} className={mainClass + props.bgStyle + linkMobileClass}>
            {props.cta}
            <FiArrowUpRight />
        </a>
    )
}

export default ButtonBanner;