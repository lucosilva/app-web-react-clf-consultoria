import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import BPOFiscal from './pages/Servicos/BPOFiscal';
import BPOContabil from './pages/Servicos/BPOContabil';
import BPOFolha from './pages/Servicos/BPOFolha';
import Paralegal from './pages/Servicos/Paralegal';
import StaffLoan from './pages/Servicos/StaffLoan';
import ProjetosEspecias from './pages/Servicos/projetosEspecias';

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
                <Route path="/historia/" component={Historia} />
                <Route path="/contato/" component={Contato} />
                <Route path="/formulario/sucesso/" component={FormularioSucesso} />
                
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;