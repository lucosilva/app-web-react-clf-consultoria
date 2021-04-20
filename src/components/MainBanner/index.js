import React from 'react';
import './style.css';
import ImgBanner from '../../assets/home/homem-e-mulher-tomando-cafe.jfif';
import ButtonBanner from './components/ButtonBanner';
import Social from './components/Social';

function MainBanner() {
    return (
        <div className="mainBanner">
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
                        <ButtonBanner cta="Conheça os serviços" url="#" bgStyle="grey" linkmobile="true" />
                        <ButtonBanner cta="Contrate a CLF" url="#" bgStyle="dark" />
                    </div>
                </div>

                <Social facebook="#" instagram="#" linkedin="" />
            </div>
        </div>
    )
}

export default MainBanner;