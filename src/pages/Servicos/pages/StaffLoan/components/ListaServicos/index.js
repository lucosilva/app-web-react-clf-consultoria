/* eslint-disable no-use-before-define */
import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';


import { ImOffice } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import { FiAward } from "react-icons/fi";



function ListServicos(){
    return (
        <Carrossel title='Serviços Staff Loan'>
            {[
                {icone:ImOffice, titulo:'Alocação de profissionais na área fiscal', subtitulo:''},
                {icone:FaHandshake, titulo:'Banco de profissionais e especialistas', subtitulo:''},
                {icone:FiAward, titulo:'Agilidade na entrega e garantia no cumprimento de prazos', subtitulo:''}
            ]}
        </Carrossel>
    );
}

export default ListServicos;