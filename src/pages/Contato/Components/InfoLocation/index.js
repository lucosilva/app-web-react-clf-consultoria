import React from 'react';
import ImagelefttWithText from '../../../../components/ImageLeftWithText';

import imgMain from '../../../../assets/contato/mao-segurando-celular-aberto-no-maps.gif';

function Detalhes() {
    return (
        <ImagelefttWithText
            imagem={imgMain}
            hastag='#NosLocalize'
            title='Onde nos encontrar ?'
            description='Avenida Aricanduva, Aricanduva, 5555 São Paulo - SP, 03527-900'
            button='on'
            buttonUrl='#'
            cta='Abrir no Maps'
        />
    );
}

export default Detalhes;