//eslint no-use-before-define: 0

import React, {useEffect , useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/logo/clf-logo-black.png';
import logoWhite from '../../assets/logo/clf-logo-white.png';

function Logo(props) {
    const classText = ' text';
    
    const [animacao, setAnimacao] = useState('');
    const [logo, setLogo] = useState(logoBlack);

    // eslint-disable-next-line
    useEffect(()=>{
        // eslint-disable-next-line
        props.animate === 'on' ? eventScrollAnimate() : setAnimacao('');
        // eslint-disable-next-line
        props.color === 'white' ?  setLogo(logoWhite) : setLogo(logoBlack);
        // eslint-disable-next-line
    },[])

    function eventScrollAnimate(){
        document.addEventListener("scroll", ()=>{
            window.scrollY > 300 ? setAnimacao('animate__bounceOutLeft') : setAnimacao('');             
        });
    }

    return (
        <Link className={props.classe} to={props.link}>
            <img src={logo} alt="Logo" />

            <span className={animacao + classText} >
                {props.titulo}
            </span>
        </Link>
    )
}

export default Logo;