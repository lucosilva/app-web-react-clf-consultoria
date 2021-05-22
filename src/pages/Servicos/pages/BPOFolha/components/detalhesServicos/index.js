import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/folha/conversa.gif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#BPONaCLF'
            title='Folha'
            description='Orientamos e atuamos em todos o processo da administração de pessoal, sempre com base nas legislações vigentes.'
            button='off'
            bg="bg-white"
        />
    );
}

export default Detalhes;