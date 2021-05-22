import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { ImCalculator } from "react-icons/im";
import { FiAward } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiRefreshCw } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";


function ServicosCardList() {
    return (
        <Carrossel title='Serviços BPO Contábil' saibaMais="false">
            {[
                { icone: FiThumbsUp, titulo: 'Classificação contábil' },              
                { icone: FiFileText, titulo: 'Digitação do movimento' },              
                { icone: FiRefreshCw, titulo: 'Conciliação contábil' },              
                { icone: FiTrendingUp, titulo: 'Composição analítica dos saldos das contas de ativo e passivo' },              
                { icone: FiBookOpen, titulo: 'Emissão dos livros diário e razão analítico' },              
                { icone: FiBook, titulo: 'Emissão de relatórios gerenciais diversos, como: Balanço patrimonial, Demonstração de resultados do exercício, Demonstração dos lucros ou prejuízos acumulados, Relatório do ativo imobilizado, incluindo listagem de bens e razão auxiliar' },              
                { icone: FiAward, titulo: 'SPED contábil' },              
                { icone: ImCalculator, titulo: 'Demais rotinas do setor' },              
            ]}
        </Carrossel>
    );
}

export default ServicosCardList;