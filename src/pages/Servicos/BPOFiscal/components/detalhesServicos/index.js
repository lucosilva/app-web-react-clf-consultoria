import React from 'react';
import ImageLeftWithText from '../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../assets/sevicos/fiscal/financas.jfif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#BPONaCLF'
            title='Fiscal'
            description='Terceirizamos as rotinas fiscais de forma total, ou de processos
            específicos, como por exemplo: apuração e obrigações acessórias.'
            button='off'
        />
    );
}

export default Detalhes;