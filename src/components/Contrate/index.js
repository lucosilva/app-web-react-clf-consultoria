import React from 'react'
import './style.css';
import ButtonContrate from '../MainBanner/components/ButtonBanner';


function Contrate() {
    return (
        <section className='contrate'>
            <div className='context'>
                <div className="container">
                    <h2>quer contratar os serviços de nossa contabilidade agora?</h2>
                    <p>Você pode preencher o nosso formulario que falaremos com você o mais breve possivel, ou entre em contato atráves do telefone ou e-mail.</p>

                    <div className="containar-buttonContrate">
                        <ButtonContrate cta="Contrate a CLF" url="/formulario/" bgStyle="grey" />
                        <ButtonContrate cta="Contatos" url="/contatos/" bgStyle="dark" linkmobile="true" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contrate;