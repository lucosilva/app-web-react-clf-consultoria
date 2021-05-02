import React from 'react';
import './style.css';


import { MdKeyboardArrowDown } from "react-icons/md";

function ArrowScroll(props) {
    const left = props.direction === 'left' ? 'left' : '';

    function scrollDown(){
        window.scrollTo(0,500)
    }

    return (
        <section class='link-btn-scroll' onClick={scrollDown}>
            <div className={'btn-scroll '+ left}>

                <MdKeyboardArrowDown />

                <span>deslize para continuar</span>
            </div>
        </section>
    );
}

export default ArrowScroll;