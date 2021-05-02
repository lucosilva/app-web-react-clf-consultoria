import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Social(props) {

    return (
        <div className="social-container">
            <Link to={props.facebook}>
                <FaFacebookF />
            </Link>
            <Link to={props.instagram}>
                <FaInstagram />
            </Link>
            <Link to={props.linkedin}>
                <FaLinkedinIn />
            </Link>
        </div>
    )
}

export default Social;