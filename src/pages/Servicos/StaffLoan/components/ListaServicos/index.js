import React from 'react';
import Carrossel from '../../../../../components/Carrossel';

import { FiAlertCircle } from "react-icons/fi";
import { ImOffice } from "react-icons/im";
import { FaAward } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";


function ListServicos(){
    return (
        <Carrossel title='Paralegal'>
            {[
                {icone:ImOffice, titulo:'Alocação de profissionais na área fiscal', subtitulo:''},
                {icone:FaHandshake, titulo:'Banco de profissionais e especialistas', subtitulo:''},
                {icone:FaScroll, titulo:'Agilidade na entrega e garantia no cumprimento de prazos', subtitulo:''}
            ]}
        </Carrossel>
    );
}

export default ListServicos;