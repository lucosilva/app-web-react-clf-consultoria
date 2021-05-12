import React from 'react'
import './style.css';
import FormItem from './components/formItem';
import useForm from '../hooks/useForm';

function Contrate() {

    const valueInit = {
        name: "",
        email: "",
        tel: ""
    }
    const { handleChange, handleSubmit, getDataForm } = useForm(valueInit);
    const { name } = getDataForm();
    const { email } = getDataForm();
    const { tel } = getDataForm();
    
    return (
        <section className='contrate'>
            <div className='context'>
                <div className="container">
                    <h2>Deseja solicitar um orçamento agora ?</h2>
                    <p>Preencha o nosso formulario, entraremos em contato com você o mais breve possivel.</p>


                    <form>
                        <FormItem
                            titleButton="Nome Completo"
                            idForm="nome"
                            titleInput="nome"
                            placeholder="Informe o seu nome"
                            onChange={(event) => {
                                handleChange('name', event.target.value);
                            }}

                            mask=""
                            valueForm={name}
                        />
                        <FormItem
                            titleButton="Telefone"
                            idForm="tel"
                            titleInput="telefone ou celular"
                            placeholder="informe o seu telefone ou celular"
                            onChange={(event) => {
                                handleChange('tel', event.target.value);
                            }}
                            mask="(99) 9999-99999"
                            valueForm={tel}
                        />
                        <FormItem
                            titleButton="E-mail"
                            idForm="email"
                            titleInput="e-mail"
                            placeholder="Informe o seu e-mail"
                            onChange={(event) => {
                                handleChange('email', event.target.value);
                            }}
                            mask=""
                            valueForm={email}
                        />

                        <div className="buttonSubmit" onClick={() => { handleSubmit() }}>Enviar</div>

                        <input type="text" autoComplete="on" style={{ "display": "none" }} />
                    </form>


                </div>
            </div>
        </section>
    );
}

export default Contrate;