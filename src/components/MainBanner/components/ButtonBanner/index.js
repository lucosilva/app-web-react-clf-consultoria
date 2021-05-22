import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiArrowUpRight } from "react-icons/fi";

function ButtonBanner(props) {

    const mainClass = " buttonBanner ";
    const linkMobileClass = props.linkmobile === 'true' ? ' links-mobile ' : '' ;
   // eslint-disable-next-line
    const buttonAction =  props.scrollForm === 'true' ?  <div onClick={props.onClick} className={mainClass + props.bgStyle + linkMobileClass + ' buttonNone'}>{props.cta}<FiArrowUpRight /></div> :  <Link to={props.url} className={mainClass + props.bgStyle + linkMobileClass}>   {props.cta}    <FiArrowUpRight /> </Link> ;
    return (
        buttonAction      
    )
}

export default ButtonBanner;