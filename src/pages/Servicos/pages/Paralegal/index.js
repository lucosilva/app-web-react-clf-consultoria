import React from 'react';
import Default from '../../../../components/DefaultComponents';

import MainBanner from '../../../../components/BannerLevelTwo';
import Detalhesservicos from './components/detalhesServicos';
import ListaServicos from './components/ListaServicos';
import Contrate from '../../../../components/Contrate';
import Faq from './components/FaqParalegal';

function Paralegal() {
    return (
        <Default>
            <MainBanner
                titulo="Paralegal"
                subtitulo="Confira os serviços relacionados á atividade legal"
                url="/formulario/"
                ctaButton="Contrate a CLF"
            />
            <Detalhesservicos />
            <ListaServicos />            
            <Contrate />
            <Faq />
        </Default>
    );
}

export default Paralegal;