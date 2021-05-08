import React from 'react';
import './style.css';

import Default from '../../../../components/DefaultComponents';
import imgSucesso from '../../../../assets/outros/undraw_Order_confirmed_re_g0if.svg';
import Button from '../../../../components/MainBanner/components/ButtonBanner';

function Success() {
    return (
        <Default>
            <div className="success">
                <div className="container">
                    <h1>
                        Pegamos todas <br/>as informações.
                    </h1>

                    <img src={imgSucesso} alt="" />

                    <p>Você receberá um e-mail automatico de confirmação
                    <br/>
                    Logo, entraremos em contato.</p>

                    <Button url="/" bgStyle="dark" cta="voltar ao inicio"/>
                </div>
            </div>
        </Default>
    );
}

export default Success;