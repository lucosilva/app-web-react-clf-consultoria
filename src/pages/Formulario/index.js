import React from 'react';
import './style.css';

import DefaultComponent from '../../components/DefaultComponents';
import FormItem from './components/formItem';

function Formulario() {
    return (
        <DefaultComponent>
            <div className="formulario">
                <div className="container">
                    <h1>Formas de contatos inicial com você.</h1>
                    <div className="context">
                        <form>
                            <div>
                                <FormItem  
                                    titleButton="Nome Completo"
                                    idForm="nome"
                                    titleInput="nome"
                                    placeholder="Informe o seu nome"
                                    />
                                <FormItem  
                                    titleButton="Telefone"
                                    idForm="tel"
                                    titleInput="telefone"
                                    placeholder="informe o seu telefone ou celular"
                                    />                                
                            </div>
                                <FormItem  
                                    titleButton="E-mail"
                                    idForm="email"
                                    titleInput="e-mail"
                                    placeholder="Informe o seu e-mail"
                                    />      

                                    <input type="text" autoComplete="on" style={{"display":"none"}}/>                                                      
                        </form>
                    </div>
                </div>
            </div>
        </DefaultComponent>
    );
}

export default Formulario;