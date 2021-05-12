import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/folha/conversa.gif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#BPONaCLF'
            title='Folha'
            description='Terceirizamos as rotinas de dpto. pessoal de forma total, ou de processos
            específicos.'
            button='off'
            bg="bg-white"
        />
    );
}

export default Detalhes;