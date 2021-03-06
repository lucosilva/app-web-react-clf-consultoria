import React from 'react';
import Default from '../../../../components/DefaultComponents';

import MainBanner from '../../../../components/BannerLevelTwo';
import Detalhesservicos from './components/detalhesServicos';
import Contrate from '../../../../components/Contrate';
// import Faq from './components/FaqBPOFiscal';
import ListService from './components/ServicosCardList';

function BPOFiscal() {
    return (
        <Default>
            <MainBanner
                titulo="BPO Fiscal"
                subtitulo="Confira os serviços relacionados á atividade fiscais"
                url="/formulario/"
                ctaButton="Contrate a CLF"               
            />
            <Detalhesservicos />
            <ListService/>                        
            <Contrate />
            {/* <Faq /> */}
        </Default>
    );
}

export default BPOFiscal;