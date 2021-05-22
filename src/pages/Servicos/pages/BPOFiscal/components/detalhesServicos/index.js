import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/fiscal/financas.jfif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#BPONaCLF'
            title='Fiscal'
            description='Executamos toda a rotina do departamento fiscal, desde a classificação das notas fiscais até a apuração dos impostos.'
            button='off'
            bg="bg-white"
        />
    );
}

export default Detalhes;