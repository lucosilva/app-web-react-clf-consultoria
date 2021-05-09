import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/paralegal/assinando-documento.jpg';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#CLFsemburocracia'
            title='regularização do seu negócio'
            description='texto descritivo sobre o serviço'
            button='off'
            bg="bg-white"
        />
    );
}

export default Detalhes;