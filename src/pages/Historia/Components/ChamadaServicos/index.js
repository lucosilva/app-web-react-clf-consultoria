import React from 'react';
import ImageLeftWithText from '../../../../components/ImageLeftWithText';

import imgMain from '../../../../assets/historia/reuniao-home-mulher-sucesso.jpg';

function Detalhes() {
    return (
        <ImageLeftWithText
            imagem={imgMain}
            hastag='#CLFSemburocracia'
            title='Serviços Operacionais'
            description='Conheça nossa lista de serviços.
            Escolha a solução para o problemas
             que está enfrentando.'
            button='on'
            cta='Conheçer seviços'
            buttonUrl='/servicos/'
        />
    );
}

export default Detalhes;