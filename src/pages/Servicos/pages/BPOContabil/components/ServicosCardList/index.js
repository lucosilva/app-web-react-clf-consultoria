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
        <Carrossel title='Serviços BPO Contábil' saibaMais="false">
            {[
                { icone: ImCalculator, titulo: 'Classificação contábil' },
                { icone: ImCalculator, titulo: 'Digitação do movimento' },
                { icone: ImCalculator, titulo: 'Conciliação contábil' },
                { icone: ImCalculator, titulo: 'Composição analítica dos saldos das contas de ativo e passivo' },
                { icone: ImCalculator, titulo: 'Controle escritural do ativo imobilizado integrado a contabilidade' },
                { icone: ImCalculator, titulo: 'Emissão dos livros diário e razão analítico' },
                { icone: ImCalculator, titulo: 'Emissão de relatórios gerenciais diversos, como Balanço patrimonial' },
                { icone: ImCalculator, titulo: 'Demonstração de resultados do exercício' },
                { icone: ImCalculator, titulo: 'Demonstração dos lucros ou prejuízos acumulados' },
                { icone: ImCalculator, titulo: 'Relatório do ativo imobilizado, incluindo listagem de bens e razão auxiliar' },
                { icone: ImCalculator, titulo: 'Escrituração Digital Contábil' },
                { icone: ImCalculator, titulo: 'Escrituração Fiscal Contábil' },
                { icone: ImCalculator, titulo: 'Atendimento a fiscalização' },
            ]}
        </Carrossel>
    );
}

export default ServicosCardList;