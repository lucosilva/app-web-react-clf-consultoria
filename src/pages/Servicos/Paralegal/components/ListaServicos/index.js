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
                {icone:ImOffice, titulo:'Abertura de empresas e filiais', subtitulo:''},
                {icone:FaHandshake, titulo:'Encerramento de empresas', subtitulo:''},
                {icone:FaScroll, titulo:'Atualizações cadastrais na Receita Federal, Secretarias e Municípios', subtitulo:''},
                {icone:FaUniversity, titulo:'Abertura de inscrições estaduais e municipais', subtitulo:''},
                {icone:FaAward, titulo:'Apoio na obtenção de certidões negativas de débito', subtitulo:''}
            ]}
        </Carrossel>
    );
}

export default ListServicos;