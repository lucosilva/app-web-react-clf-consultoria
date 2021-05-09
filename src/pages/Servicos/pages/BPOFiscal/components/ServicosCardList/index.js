import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { ImCalculator } from "react-icons/im";
// import { ImStatsDots } from "react-icons/im";
// import { ImBooks } from "react-icons/im";
// import { ImOffice } from "react-icons/im";
// import { FiBriefcase } from "react-icons/fi";
// import { ImStack } from "react-icons/im";


function ServicosCardList() {
    return (
        <Carrossel title='Serviços BPO Fiscal'>
            {[
                { icone: ImCalculator, titulo: 'Escrituração dos livros fiscais legais' },
                { icone: ImCalculator, titulo: 'Apuração de ICMS a nível nacional' },
                { icone: ImCalculator, titulo: 'Apuração de PIS e COFINS regime cumulativo e não cumulativo' },
                { icone: ImCalculator, titulo: 'Apuração de ISS devido de vários munícipios' },
                { icone: ImCalculator, titulo: 'Apuração de IRPJ e CSLL (Lucro Presumido)' },
                { icone: ImCalculator, titulo: 'Apuração do Simples Nacional' },
                { icone: ImCalculator, titulo: 'Elaboração, geração e entrega de todas as declarações municipais, estaduais e federais ' },
                { icone: ImCalculator, titulo: 'perante os órgãos governamentais' },
                { icone: ImCalculator, titulo: 'Consultoria Tributária e Fiscal' },
                { icone: ImCalculator, titulo: 'Atendimento a fiscalização' },
            ]}
        </Carrossel>
    );
}

export default ServicosCardList;