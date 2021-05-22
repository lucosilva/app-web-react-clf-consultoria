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
                        <ButtonBanner cta="Conheça os serviços" url="/servicos/" bgStyle="dark"  />
                        {/* <ButtonBanner cta="Contrate a CLF" url="#" bgStyle="grey" linkmobile="true"/> */}
                    </div>
                </div>

                <Social 
                    facebook="https://www.facebook.com/clf.consultoriatributaria" 
                    instagram="https://www.instagram.com/clf.consultoriatributaria/" 
                    linkedin="https://www.linkedin.com/in/clfconsultoriafiscal-clf-35637020b/" />
                <ArrowScroll direction='left' />
            </div>
        </section>
    )
}

export default MainBanner;