import React from 'react';
import './style.css';
import ButtonBanner from '../MainBanner/components/ButtonBanner';
import Social from '../MainBanner/components/Social';
import ArrowScroll from '../ArrowScroll';

function BannerLT(props) {

    function scrollDown() {
        window.scrollTo(0, 1350)
    }

    return (
        <section className="bannerLT">
            <div className="container">
                <div className="context">
                    <h1>{props.titulo}</h1>
                    <p>{props.subtitulo}</p>

                    <ButtonBanner scrollForm='true' onClick={scrollDown} cta="Contrate a CLF"  bgStyle="dark" />
                </div>
                <Social
                    facebook="https://www.facebook.com/clf.consultoriatributaria"
                    instagram="https://www.instagram.com/clf.consultoriatributaria/"
                    linkedin="https://www.linkedin.com/in/clfconsultoriafiscal-clf-35637020b/" />

                <ArrowScroll />
            </div>
        </section>
    );
}


export default BannerLT;