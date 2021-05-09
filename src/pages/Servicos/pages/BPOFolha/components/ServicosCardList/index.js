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
        <Carrossel title='Serviços BPO Folha' >
            {[
                { icone: ImCalculator, titulo: 'Folha de Pagamento' },
                { icone: ImCalculator, titulo: 'Cálculos encargos sociais' },
                { icone: ImCalculator, titulo: 'Registro dos Empregados' },
                { icone: ImCalculator, titulo: 'Rescisões/Férias/13º' },
                { icone: ImCalculator, titulo: 'Dissídios Coletivos' },
                { icone: ImCalculator, titulo: 'Informes de Rendimentos' },
                { icone: ImCalculator, titulo: 'Obrigações anuais - RAIS/E-SOCIAL / SIND. PATRONAL ETC' },
                { icone: ImCalculator, titulo: 'Assessoria e Consultoria' },

            ]}
        </Carrossel>
    );
}

export default ServicosCardList;