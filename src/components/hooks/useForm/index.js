import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const quinzeSegundosDuracaoNotificacao = 15*1000;
toast.configure({autoClose:quinzeSegundosDuracaoNotificacao});


function useForm(valueInit) {
    const history = useHistory();
    const [dataForm, setDataForm] = useState(valueInit);

    function handleChange(key, newValue) {
        setDataForm({
            ...dataForm,
            [key]: newValue
        });
    }

    function handleSend() {

        toast('Estamos recebendos os seus dados.....',{autoClose: 8000});
        
        fetch(process.env.END_POINT, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(dataForm),
        })     
        .then(async (dataServer) => {
            if (dataServer.ok) {                
                history.push('/formulario/sucesso/');
                clearForm();
                return await dataServer.json();                 
            }else{
                toast.error('Nosso servidor está indisponivel no momento. Tente novamente mais tarde');
                clearForm();
            }
                throw new Error('server fora do ar')
        });
    }

    function getDataForm() {
        return dataForm;
    }

    function clearForm() {
        setDataForm(valueInit);
    }

    function validateForm() {
        return {
            email: validateEmail(dataForm.email),
            tel: validateTel(dataForm.tel),
            name: validateName(dataForm.name)
        }

    }

    function validateEmail(valueEmail) {

        let IsOthersChar = [];
        const positionAT = valueEmail.indexOf("@"); //@
        const positionDOT = valueEmail.lastIndexOf("."); //(.)

        const othersChar = [' ', '!', '#', '$', '%', '¨', '&', '*', '(', ')', '-', '=', ',', '?', '´', '^', '~', '}', '{', '[', ']', ';', ':', '|', '₢', '/', '°'];

        // eslint-disable-next-line
        othersChar.map((charItem) => {
            IsOthersChar.push(valueEmail.indexOf(charItem) > 0); // se retornar true, a string contem uma um char especial nela. 
        })


        if (positionAT < 1 || positionDOT < positionAT + 2 || positionDOT + 2 >= valueEmail.length || IsOthersChar.indexOf(true) >= 0) {
            //Não é um endereço de e-mail válido
            return false;
        } else {
            return true;
        }
    }

    function validateTel(valueTel) {
        if (valueTel.length < 15) {
            //Não é um telefone válido
            return false;
        } else {
            return true;
        }
    }

    function validateName(valueName){
        if (valueName.length < 1) {
            //campo de texto vazio
            return false;
        } else {
            return true;
        }
    }

    function handleSubmit() {
        const objValidate = validateForm();
        if (objValidate.email && objValidate.tel && objValidate.name) {
            handleSend();
        }
        
        if(objValidate.email === false){
            //toast de aviso email invalido    
            toast.error('Endereço de e-mail não é válido. Tente novamente');
        }
        
        if(objValidate.tel === false){
            //toast de aviso tel invalido
            toast.warn('Telefone não é válido. Tente novamente');
        }

        if(objValidate.name === false){
            //toast de aviso nome invalido
            toast.warn('Campo de nome vazio, favor preencher.');
        }
    }

    return { handleChange, getDataForm, handleSubmit }

}

export default useForm;