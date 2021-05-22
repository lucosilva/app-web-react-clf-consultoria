/* eslint-disable no-use-before-define */

import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { FiCheckSquare } from "react-icons/fi";
import { FiDivide } from "react-icons/fi";
import { FiRotateCcw } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

function ListServicos(){
    return (
        <Carrossel title='Projetos Especias'>
            {[
                {icone:FiCheckSquare, titulo:'Revisão fiscal', subtitulo:''},
                {icone:FiDivide, titulo:'Recálculo de auto de infração ICMS e ICMS ST', subtitulo:''},
                {icone:FiRotateCcw, titulo:'Retificação de obrigações acessórias', subtitulo:''},
                {icone:FiFile, titulo:'Clipping fiscal', subtitulo:''},
                {icone:FiCreditCard, titulo:'Levantamento de créditos PIS e COFINS', subtitulo:''},
                {icone:FiBookmark, titulo:'Treinamento na área fiscal', subtitulo:''},
            ]}
        </Carrossel>
    );
}

export default ListServicos;