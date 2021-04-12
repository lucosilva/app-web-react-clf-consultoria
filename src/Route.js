import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <h1>teste</h1>
                <Route path="/" component={Home} exact />
                <Route path="/cadastro/video" component={CadastroVideo} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;