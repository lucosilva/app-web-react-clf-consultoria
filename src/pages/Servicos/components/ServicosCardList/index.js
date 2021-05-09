import React from 'react';
import CardList from '../../../../components/CardList';

import { ImCalculator } from "react-icons/im";
import { ImStatsDots } from "react-icons/im";
import { ImBooks } from "react-icons/im";
import { ImOffice } from "react-icons/im";
import { FiBriefcase } from "react-icons/fi";
import { ImStack } from "react-icons/im";


function ServicosCardList() {
    return (
        <CardList saibaMais="true" title="Serviços Operacionais" subtitle="Conheça nossos serviços.">
            {[
                {icon: ImCalculator, title: 'BPO Fiscal', subtitle: 'Terceirizamos as rotinas fiscais de forma total, ou de processos específicos', 
                url: '/servicos/bpo-fiscal/'},
                {icon: ImStatsDots, title: 'BPO Contábil', subtitle: 'Terceirizamos as rotinas contábeis ', url: '/servicos/bpo-contabil/'},
                {icon: ImBooks, title: 'BPO Folha de Pagamento', subtitle: 'Terceirizamos as rotinas de folha de pagamentos', url: '/servicos/bpo-folha/'},
                {icon: ImOffice, title: 'PARALEGAL', subtitle: 'Abertura e encerramento de empresas e filiais', url: '/servicos/paralegal/'},
                {icon: FiBriefcase, title: 'STAFF LOAN', subtitle: 'Alocação de profissionais na área fiscal pelo período que for necessário', 
                url: '/servicos/staff-loan/'},
                {icon: ImStack, title: 'PROJETOS ESPECIAIS', subtitle: 'Análise, Revisão, Recálculo, Retificação e Clipping fiscal.', url: '/servicos/projetos-especiais/'},
            ]}
        </CardList>
    );
}

export default ServicosCardList;