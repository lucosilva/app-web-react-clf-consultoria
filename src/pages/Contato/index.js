import React from 'react';
import DefaulComponents from '../../components/DefaultComponents';
import MainBanner from '../../components/BannerLevelTree';
import Contrate from '../../components/Contrate';
import InfoContato from './Components/InfoContato';
import InfoLocation from './Components/InfoLocation';
// import Faq from './Components/FaqContato';

function Contato(){
    return(
        <DefaulComponents>
            <MainBanner titulo='Contato' subtitulo='Entre em contato conosco'/>
            <InfoContato />
            <InfoLocation />
            <Contrate />
            {/* <Faq/> */}
        </DefaulComponents>
    );
}

export default Contato;