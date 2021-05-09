import React from 'react';
import ImageRightWithText from '../../../../components/ImageRightWithText';
import ImgMain from '../../../../assets/home/call.jpg'; 


function ChamadaServicos(){
    return(
        <ImageRightWithText 
            imagem={ImgMain}
            hastag='#FaleConosco'
            title='Veja como falar conosco'
            description='Nossos meios de contato e onde nos encontrar.'
            button='on'
            url='/contato/'
            cta='saiba mais'
            bg=""
        />            
    );
}

export default ChamadaServicos;