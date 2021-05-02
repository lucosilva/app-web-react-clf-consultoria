import React, {useEffect , useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/logo/clf-logo-black.png';
import logoWhite from '../../assets/logo/clf-logo-white.png';

function Logo(props) {
    const classText = ' text';
    
    const [animacao, setAnimacao] = useState('');
    const [logo, setLogo] = useState(logoBlack);

    useEffect(()=>{
        props.animate === 'on' ? eventScrollAnimate() : setAnimacao('');
        props.color === 'white' ?  setLogo(logoWhite) : setLogo(logoBlack);
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