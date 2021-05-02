/* eslint-disable no-use-before-define */

import React from 'react';
import Carrossel from '../../../../../components/Carrossel';


import { ImOffice } from "react-icons/im";

import { FaHandshake } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";



function ListServicos(){
    return (
        <Carrossel title='Projetos Especias'>
            {[
                {icone:ImOffice, titulo:'Revisão fiscal', subtitulo:''},
                {icone:FaHandshake, titulo:'Recálculo de auto de infração ICMS e ICMS ST', subtitulo:''},
                {icone:FaScroll, titulo:'Retificação de obrigações acessórias', subtitulo:''},
                {icone:FaScroll, titulo:'Clipping fiscal', subtitulo:''},
                {icone:FaScroll, titulo:'Análise da tributação do cadastro de itens', subtitulo:''},
                {icone:FaScroll, titulo:'Abertura de inscrição estadual de contribuinte substituto', subtitulo:''},
                {icone:FaScroll, titulo:'Treinamento na área fiscal', subtitulo:''},
            ]}
        </Carrossel>
    );
}

export default ListServicos;