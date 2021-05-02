import React from 'react';
import './style.css';
import ButtonBanner from './components/ButtonBanner';
import Social from './components/Social';
import ArrowScroll from '../ArrowScroll';

function MainBanner() {
    return (
        <section className="mainBanner">
            <div className="container">
                <div className="context">
                    <span>Concentre-se no que for importante!</span>
                    <h1>
                        <span>Deixe sua</span>
                        <span>Contabilidade conosco.</span>
                    </h1>
                    <p>
                        Veja o que podemos fazer pela sua empresa.
                    </p>

                    <div className="container-buttonBanner">
                        <ButtonBanner cta="Conheça os serviços" url="#servicos" bgStyle="grey" linkmobile="true" />
                        <ButtonBanner cta="Contrate a CLF" url="/formulario/" bgStyle="dark" />
                    </div>
                </div>

                <Social facebook="#" instagram="#" linkedin="" />
                <ArrowScroll direction='left' />
            </div>
        </section>
    )
}

export default MainBanner;