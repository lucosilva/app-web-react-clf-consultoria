import React from 'react';
import ImagelefttWithText from '../../../../components/ImageLeftWithText';

import imgMain from '../../../../assets/contato/mao-segurando-celular-aberto-no-maps.gif';

function Detalhes() {
    return (
        <ImagelefttWithText
            imagem={imgMain}
            hastag='#NosLocalize'
            title='Onde nos encontrar ?'
            description='Rua Victório Santim, 2381, conjunto 11, Itaquera - SP, 08290-001'
            button='off'
        />
    );
}

export default Detalhes;