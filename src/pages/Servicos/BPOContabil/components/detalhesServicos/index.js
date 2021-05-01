import React from 'react';
import ImageLeftWithText from '../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../assets/sevicos/contabil/mesa-de-trabalho-com-dois-notebook.jpg';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#BPONaCLF'
            title='Contábil'
            description='Terceirizamos as rotinas contábil de forma total, ou de processos
            específicos.'
            button='off'
        />
    );
}

export default Detalhes;