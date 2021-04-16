import React, { useState } from 'react';
import './style.css';
import { FiMenu } from "react-icons/fi";
import MenuMobile from './components/MenuMobile';

function ContainerMenuMobile() {

    const [trigger, setTrigger] = useState(false);

    function handleClick() {
        trigger ? setTrigger(false) : setTrigger(true);
        animateClick('.buttonHamburguer');
    }
    function animateClick(classButton){
        const el = document.querySelector(classButton);
        trigger? el.classList.remove('animateButton') : el.classList.add('animateButton'); 
    }

    return (
        <div className="hamburguer">
            <div onClick={handleClick} className="buttonHamburguer">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {trigger ? <MenuMobile /> : null}
        </div>
    )
}


export default ContainerMenuMobile;