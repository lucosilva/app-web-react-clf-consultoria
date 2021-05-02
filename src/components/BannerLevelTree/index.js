import React from 'react';
import './style.css';
import Social from '../MainBanner/components/Social';
import ArrowScroll from '../ArrowScroll';

function BannerLT(props) {

    return (
        <section className="bannerLTree">
            <div className="container">
                <div className="context">
                    <h1>{props.titulo}</h1>
                    <p>{props.subtitulo}</p>
                </div>
                <Social />
                <ArrowScroll />
            </div>
        </section>
    );
}


export default BannerLT;