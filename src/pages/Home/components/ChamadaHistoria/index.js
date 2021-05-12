import React from 'react';
import ImageLeftWithText from '../../../../components/ImageLeftWithText';
import ImgMain from '../../../../assets/home/homem-de-braços-aberto-para-cima.gif'; 


function ChamadaHistoria(){
    return(
        <ImageLeftWithText 
            imagem={ImgMain}
            hastag='#CLFHistoria'
            title='Conheça melhor nossa história'
            description='Sua empresa tratada como grande.'
            button='on'
            buttonUrl='/historia/'
            cta='saiba mais'
            bg="bg-white"
        />            
    );
}

export default ChamadaHistoria;