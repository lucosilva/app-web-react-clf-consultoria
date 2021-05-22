import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/paralegal/assinando-documento.gif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#CLFsemburocracia'
            title='Regularização do seu negócio'
            description='Oferecemos serviços que facilitam o dia a dia do empresário e que lidam com todos os processos necessários para manter sua empresa funcionando'
            button='off'
            bg="bg-white"
        />
    );
}

export default Detalhes;