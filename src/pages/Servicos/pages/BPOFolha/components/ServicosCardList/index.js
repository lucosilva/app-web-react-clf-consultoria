import React from 'react';
import Carrossel from '../../../../../../components/Carrossel';

import { ImCalculator } from "react-icons/im";
import { FiDollarSign } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiPieChart } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiFile } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";

function ServicosCardList() {
    return (
        <Carrossel title='Serviços BPO Folha' >
            {[
                { icone: FiDollarSign, titulo: 'Folha de Pagamento' },            
                { icone: ImCalculator, titulo: 'Cálculos encargos sociais' },            
                { icone: FiUserPlus, titulo: 'Registro dos Empregados' },            
                { icone: FiCalendar, titulo: 'Rescisões/Férias/13º' },            
                { icone: FiPieChart, titulo: 'Dissídios Coletivos' },            
                { icone: FiFileText, titulo: 'Informes de Rendimentos' },            
                { icone: FiFile, titulo: 'Obrigações anuais - RAIS/SIND. PATRONAL ETC' },            
                { icone: FiMessageCircle, titulo: 'Assessoria e Consultoria' },            

            ]}
        </Carrossel>
    );
}

export default ServicosCardList;