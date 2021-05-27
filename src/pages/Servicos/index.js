import React from 'react';
import Default from '../../components/DefaultComponents';
import MainBanner from '../../components/BannerLevelTwo';
import ListServicos from './components/ServicosCardList';
import Contrate from '../../components/Contrate';


function Servicos() {
    return (
        <Default>
            <MainBanner
                titulo="Serviços"
                subtitulo="Confira todos os nosso serviços"
                ctaButton="Contrate a CLF" />          
            <ListServicos />
            <Contrate />


        </Default>
    );
}

export default Servicos;