import React , {useEffect} from 'react';
import './style.css';
import Slider from "react-slick";

import Item from './components/Carrossel-item';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';


function Carrossel(props) {
    const listItem = [...props.children];

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, 
              variableWidth: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true
            }
          }
        ]
      };
    

    return (
        <section className='carrosselContainer '>
            <div className="title">
                <h2>Opções de serviços</h2>
                <h2>{props.title}</h2>
            </div>

            <section className="container">
                <Slider {...settings}>
                    {
                        listItem.map((card)=>{
                            return  <Item icon={card.icone} title={card.titulo} subtitle={card.subtitulo} />                            
                        })
                    }
                </Slider>
            </section>
        </section>
    );
}

export default Carrossel;