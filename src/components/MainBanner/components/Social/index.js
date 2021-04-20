import React from 'react';
import './style.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Social(props) {

    return (
        <div className="social-container">
            <a href={props.facebook}>
                <FaFacebookF />
            </a>
            <a href={props.instagram}>
                <FaInstagram />
            </a>
            <a href={props.linkedin}>
                <FaLinkedinIn />
            </a>
        </div>
    )
}

export default Social;