import React from 'react';
import Default from '../../../../components/DefaultComponents';

import MainBanner from '../../../../components/BannerLevelTwo';
import Detalhesservicos from './components/detalhesServicos';
import Contrate from '../../../../components/Contrate';
import Faq from './components/FaqBPOFolha';
import ListServices from './components/ServicosCardList';

function BPOContabil() {
    return (
        <Default>
            <MainBanner
                titulo="BPO Folha"
                subtitulo="Confira os serviços relacionados á dpto. pessoal"
                url="/formulario/"
                ctaButton="Contrate a CLF"
            />
            <Detalhesservicos />
            <Contrate />
            <ListServices />
            <Faq />
        </Default>
    );
}

export default BPOContabil;