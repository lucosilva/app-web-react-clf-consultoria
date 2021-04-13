import React, { useEffect, useState } from 'react';
import './style.css';
import ButtonContrate from '../ButtonContrate';
import Logo from '../Logo';
import ButtonItemMenu from './components/ButtonItemMenu';

function Menu() {

    const [on, setOn] = useState('');

    const alturaAtualScroll = 300;
    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            if (window.scrollY > alturaAtualScroll) {
                setOn('animate__fadeOutLeft');
            }else{
                setOn('');
            }
        });
    }, [])



    return (
        <header>
            <div className="container">
                <Logo children='Consultoria Fiscal e Tributária' classe='logo' animate={on} />
                <nav>
                    <ul>
                        <ButtonItemMenu />
                        <ButtonItemMenu />
                        <ButtonItemMenu />
                        <ButtonItemMenu />
                    </ul>
                </nav>

                <ButtonContrate classe='unLight buttonContrate' children='Contrate' />
            </div>            
        </header>
    )
}


export default Menu;