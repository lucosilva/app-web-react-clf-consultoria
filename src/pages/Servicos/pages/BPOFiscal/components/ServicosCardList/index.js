import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { ImCalculator } from "react-icons/im";
import { FiInfo } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiBook } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { FiBox } from "react-icons/fi";


function ServicosCardList() {
    return (
        <Carrossel title='Serviços BPO Fiscal'>
            {[
                { icone: FiInfo, titulo: 'Orientação sobre procedimento para emissão de Notas Fiscais' },
                { icone: FiFileText, titulo: 'Escrituração / Digitação de dados dos registros fiscais' },
                { icone: FiBook, titulo: 'Elaboração das guias de informações e de recolhimentos dos tributos devidos, mensal e anualmente' },
                { icone: FiBookOpen, titulo: 'Elaboração e controle de livros fiscais' },
                { icone: FiAward, titulo: 'SPED Fiscal' },
                { icone: FiBox, titulo: 'EFD – Contribuições' },
                { icone: ImCalculator, titulo: 'Demais obrigações Assessórias' }
    
            ]}
        </Carrossel>
    );
}

export default ServicosCardList;