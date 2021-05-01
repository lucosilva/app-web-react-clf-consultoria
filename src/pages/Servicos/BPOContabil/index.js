import React from 'react';
import Default from '../../../components/DefaultComponents';

import MainBanner from '../../../components/BannerLevelTwo';
import Detalhesservicos from './components/detalhesServicos';
import Contrate from '../../../components/Contrate';
import Faq from './components/FaqBPOContabil';

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
            <Contrate />
            <Faq />
        </Default>
    );
}

export default BPOContabil;