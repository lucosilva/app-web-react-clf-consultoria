//eslint no-use-before-define: 0

import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { ImOffice } from "react-icons/im";
// import { FaAward } from "react-icons/fa";
// import { FaHandshake } from "react-icons/fa";
// import { FaScroll } from "react-icons/fa";
// import { FaUniversity } from "react-icons/fa";


function ListServicos(){
    return (
        <Carrossel title='Paralegal'>
            {[
                {icone:ImOffice, titulo:'Abertura de empresas e filiais'},
                {icone:ImOffice, titulo:'Alteração do Contrato Social'},
                {icone:ImOffice, titulo:'Cancelamento de Empresas'},
                {icone:ImOffice, titulo:'Regularização jurídica nos órgãos públicos'},
                {icone:ImOffice, titulo:'Certidões negativas (Federal, Estadual, Municipal, INSS, FGTS, Cartórios de Protesto'},
                {icone:ImOffice, titulo:'Fórum Cível e Criminal, entre outras)'},

            ]}
        </Carrossel>
    );
}

export default ListServicos;