import React from 'react';
import './style.css';
import { FiChevronUp } from "react-icons/fi";

function ButtonBackToTop(){
    return (
        <div onClick={solutionBackToTop} className='back-to-top'>
            <FiChevronUp />
        </div>
    );
}

function solutionBackToTop(){    
    window.scrollTo(0,0)
}

export {ButtonBackToTop, solutionBackToTop}