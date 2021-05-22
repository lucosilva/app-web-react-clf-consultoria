import React from 'react';
import ImageLeftWithText from '../../../../../../components/ImageLeftWithText';

import imgMain from '../../../../../../assets/sevicos/contabil/mesa-de-trabalho-com-dois-notebook.gif';

function Detalhes() {
    return (
        <ImageLeftWithText 
            imagem={imgMain}
            hastag='#BPONaCLF'
            title='Contábil'
            description='Executamos todos os serviços contábeis, desde a classificação dos documentos, até relatórios finais e entrega de obrigações acessórias.'
            button='off'
        />
    );
}

export default Detalhes;