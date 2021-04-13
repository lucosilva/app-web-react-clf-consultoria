import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                
                <Route component={Page404} />
                {/* <Route path="/cadastro/video" component={CadastroVideo} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;