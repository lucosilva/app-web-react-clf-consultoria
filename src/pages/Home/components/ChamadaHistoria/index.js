import React from 'react';
import ImageLeftWithText from '../../../../components/ImageLeftWithText';
import ImgMain from '../../../../assets/home/homem-de-braços-aberto-para-cima.jpg'; 


function ChamadaHistoria(){
    return(
        <ImageLeftWithText 
            imagem={ImgMain}
            hastag='#CLFHistoria'
            title='Sua empresa sendo tratada como grande'
            description='Conheça melhor a história de nossa Contabilidade'
            button='on'
            buttonUrl='/historia/'
            cta='saiba mais'
        />            
    );
}

export default ChamadaHistoria;