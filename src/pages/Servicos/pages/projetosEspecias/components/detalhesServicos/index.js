import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/outros/reuniao.gif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#MaisProjetos'
            title='Projetos especias'
            description='descrição rapida'
            button='off'
        />
    );
}

export default Detalhes;