import React from 'react';
import Default from '../../../../components/DefaultComponents';

import MainBanner from '../../../../components/BannerLevelTwo';
import Contrate from '../../../../components/Contrate';
// import Faq from './components/FaqParalegal';
import ListaServicos from './components/ListaServicos';


function Paralegal() {
    return (
        <Default>
            <MainBanner
                titulo="Projetos Especias"
                subtitulo="Confira os Projetos Especias"
                url="/formulario/"
                ctaButton="Contrate a CLF"
            />
            <ListaServicos />
            <Contrate />
            {/* <Faq /> */}
        </Default>
    );
}

export default Paralegal;