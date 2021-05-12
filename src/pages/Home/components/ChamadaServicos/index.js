import React from 'react';
import ImageLeftWithText from '../../../../components/ImageLeftWithText';
import ImgMain from '../../../../assets/home/meeting.gif'; 


function ChamadaServicos(){
    return(
        <ImageLeftWithText 
            imagem={ImgMain}
            hastag='#ServicosCLF'
            title='Conheça nossos principais serviços'
            description=''
            button='on'
            buttonUrl='/servicos/'
            cta='saiba mais'
            bg="bg-white"
        />            
    );
}

export default ChamadaServicos;