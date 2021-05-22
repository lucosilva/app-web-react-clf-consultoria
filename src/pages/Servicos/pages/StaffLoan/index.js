import React from 'react';
import Default from '../../../../components/DefaultComponents';

import MainBanner from '../../../../components/BannerLevelTwo';
import Detalhesservicos from './components/detalhesServicos';
import Contrate from '../../../../components/Contrate';
// import Faq from './components/FaqParalegal';
import ListaServicos from './components/ListaServicos';


function Paralegal() {
    return (
        <Default>
            <MainBanner
                titulo="Staff Loan"
                subtitulo="Confira os serviços relacionados á Staff Loan"
                url="/formulario/"
                ctaButton="Contrate a CLF"
            />
            <Detalhesservicos />
            <ListaServicos />
            <Contrate />
            {/* <Faq /> */}
        </Default>
    );
}

export default Paralegal;