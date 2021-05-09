import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/SL/to-do.jpg';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#StaffLoanNaCLF'
            title='Staff Loan'
            description='descrição rapida'
            button='off'
        />
    );
}

export default Detalhes;