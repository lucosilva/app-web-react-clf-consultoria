import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/SL/to-do.gif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#StaffLoanNaCLF'
            title='Staff Loan'
            description='Atender as necessidades de sua empresa, sem precisar aumentar o quadro de colaboradores. Nós terceirizamos esse profissional nas áreas fiscal e contábil para que sua empresa consiga otimizar a performance não só dos setores, mas das atividades que necessitam suprir suas demandas.'
            button='off'
        />
    );
}

export default Detalhes;