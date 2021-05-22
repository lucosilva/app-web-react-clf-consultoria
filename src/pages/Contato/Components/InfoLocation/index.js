import React from 'react';
import ImagelefttWithText from '../../../../components/ImageLeftWithText';

import imgMain from '../../../../assets/contato/mao-segurando-celular-aberto-no-maps.gif';

function Detalhes() {
    return (
        <ImagelefttWithText
            imagem={imgMain}
            hastag=''
            title='Onde nos encontrar ?'
            description='Rua Victório Santim, 2381, conjunto 11, Itaquera - SP, CEP: 08290-001'
            buttonUrl="https://goo.gl/maps/GcbyaYyjwmJvaAjY9"
            cta="Abra no mapa"
            button='maps'
        />
    );
}

export default Detalhes;