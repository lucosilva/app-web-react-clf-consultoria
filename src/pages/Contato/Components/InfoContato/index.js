import React from 'react';
import ImageRighttWithText from '../../../../components/ImageRightWithText-Contact';

import imgMain from '../../../../assets/contato/img-info-contato.gif';

function Detalhes() {
    return (
        <ImageRighttWithText
            imagem={imgMain}
            hastag='#FaleConosco'
            title='Atendimento ao cliente.'

            telNumber='(11) 2338-1893 | (11) 9 6467-4634'
            // telObs=''

            mail='contato@clf.srv.br'
        />
    );
}

export default Detalhes;