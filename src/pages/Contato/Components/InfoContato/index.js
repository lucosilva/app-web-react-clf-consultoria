import React from 'react';
import ImageRighttWithText from '../../../../components/ImageRightWithText-Contact';

import imgMain from '../../../../assets/contato/img-info-contato.jpg';

function Detalhes() {
    return (
        <ImageRighttWithText
            imagem={imgMain}
            hastag='#FaleConosco'
            title='Atendimento ao cliente.'

            telNumber='(11) 2868-9751'
            telObs='Capitais e regiões metropolitanas de SP'

            mail='faleconosmo@clf.com'
        />
    );
}

export default Detalhes;