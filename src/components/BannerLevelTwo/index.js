import React from 'react';
import './style.css';
import ButtonBanner from '../MainBanner/components/ButtonBanner';
import Social from '../MainBanner/components/Social';

function BannerLT(props) {

    return (
        <div className="bannerLT">
            <div className="container">
                <div className="context">
                    <h1>{props.titulo}</h1>
                    <p>{props.subtitulo}</p>

                    <ButtonBanner cta={props.ctaButton} url={props.url} bgStyle="dark" />
                </div>
                <Social />
            </div>
        </div>
    );
}


export default BannerLT;