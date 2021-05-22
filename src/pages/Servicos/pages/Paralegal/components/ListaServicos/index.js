//eslint no-use-before-define: 0

import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { ImOffice } from "react-icons/im";
import { FiEdit3 } from "react-icons/fi";
import { FiXOctagon } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { HiOutlineLibrary } from "react-icons/hi";

function ListServicos(){
    return (
        <Carrossel title='Serviços paralegal'>
            {[
                {icone:ImOffice, titulo:'Abertura de Empresa'},               
                {icone:FiEdit3, titulo:'Alteração do Contrato Social'},               
                {icone:FiXOctagon, titulo:'Cancelamento de Empresas'},               
                {icone:HiOutlineLibrary, titulo:'Regularização jurídica nos órgãos públicos'},               
                {icone:FiAward, titulo:'Certidões negativas (Federal, Estadual, Municipal, INSS, FGTS, Cartórios de Protesto, entre outras'}
            ]}
        </Carrossel>
    );
}

export default ListServicos;