import React from 'react';
import ImageLeftWithText from '../../../../components/ImageLeftWithText';
import ImgMain from '../../../../assets/home/mulhe-sorrindo-de-frente-ao-notebook.jpg'; 


function ChamadaContato(){
    return(
        <ImageLeftWithText 
            imagem={ImgMain}
            hastag='#CLFdigital'
            title='Atendimento com comodidade'
            description='Iremos te atender 100% online sem necessidade de visitas.'
            button='on'
            buttonUrl='/contato/'
            cta='saiba mais'
        />            
    );
}

export default ChamadaContato;