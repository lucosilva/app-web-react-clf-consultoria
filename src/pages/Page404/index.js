/* eslint-disable no-use-before-define */

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import DefaulComponents from '../../components/DefaultComponents';
import img404 from '../../assets/outros/undraw_page_not_found_su7k.svg';

function Page404() {
    return (
        <DefaulComponents>
            <div className="nofind">
                <div className="container">
                    <img src={img404} alt='alt'/>
                    <h1>Eita! não encontramos essa pagina.</h1>                    
                    <Link to="/">ir para Inicio</Link>
                </div>
            </div>
        </DefaulComponents>
    )
}

export default Page404;