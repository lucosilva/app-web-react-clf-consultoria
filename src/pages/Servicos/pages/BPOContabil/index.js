import React from 'react';
import Default from '../../../../components/DefaultComponents';

import MainBanner from '../../../../components/BannerLevelTwo';
import Detalhesservicos from './components/detalhesServicos';
import Contrate from '../../../../components/Contrate';
import Faq from './components/FaqBPOContabil';
import ListServices from './components/ServicosCardList';

function BPOContabil() {
    return (
        <Default>
            <MainBanner
                titulo="BPO Contábil"
                subtitulo="Confira os serviços relacionados á atividade Contabil"
                url="/formulario/"
                ctaButton="Contrate a CLF"
            />
            <Detalhesservicos />
            <ListServices />
            <Contrate />
            <Faq />
        </Default>
    );
}

export default BPOContabil;