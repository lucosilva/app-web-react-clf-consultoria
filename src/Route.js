import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';

import Servicos from './pages/Servicos';
import BPOFiscal from './pages/Servicos/pages/BPOFiscal';
import BPOContabil from './pages/Servicos/pages/BPOContabil';
import BPOFolha from './pages/Servicos/pages/BPOFolha';
import Paralegal from './pages/Servicos/pages/Paralegal';
import StaffLoan from './pages/Servicos/pages/StaffLoan';
import ProjetosEspecias from './pages/Servicos/pages/projetosEspecias';

import Historia from './pages/Historia';
import Contato from './pages/Contato';
import FormularioSucesso from './pages/Formulario/page/success';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/servicos/bpo-fiscal/" component={BPOFiscal} />
                <Route path="/servicos/bpo-contabil/" component={BPOContabil} />
                <Route path="/servicos/bpo-folha/" component={BPOFolha} />
                <Route path="/servicos/paralegal/" component={Paralegal} />
                <Route path="/servicos/staff-Loan/" component={StaffLoan} />
                <Route path="/servicos/projetos-especiais/" component={ProjetosEspecias} />
                <Route path="/servicos/" component={Servicos} />
                <Route path="/historia/" component={Historia} />
                <Route path="/contato/" component={Contato} />
                <Route path="/formulario/sucesso/" component={FormularioSucesso} />
                
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;