import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import { FiChevronRight } from "react-icons/fi";

function Breadcrumb() {

    const [display, setDisplay] = useState("block");
    const [itensLink, setItensLink] = useState([]);
    const [namePage, setNamePage] = useState({
        "servicos": "Serviços",
        "bpo-fiscal": "BPO Fiscal",
        "bpo-contabil": "BPO Contábil",
        "bpo-folha": "BPO Folha de Pagamento",
        "paralegal": "Paralegal",
        "staff-loan": " STAFF LOAN",
        "projetos-especiais": "Projetos Especiais",
        "historia": "Historia",
        "contato": "Contato",
        "privacidade": "Privacidade",
    });

    useEffect(() => {

        var url_atual = window.location.pathname;

        var url_mood = url_atual.slice(1, url_atual.length);
        url_mood = url_mood.slice(0, url_mood.length - 1);
        var arrayUrls = url_mood.split("/");

        setItensLink(arrayUrls);


        if (url_atual === "/formulario/sucesso/" || url_atual === "/formulario/Sucesso/" || url_atual === "/") {
            setDisplay('none');
        }
    }, [])



    return (
        <div className="breadcrumb-container" style={{ "display": display }}>
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <FiChevronRight />
                    </li>
                    {itensLink.map((item, index) => {
                        const url = `/${item}/`;

                        return (
                            <li key={item}>
                                <Link to={url}>{namePage[item]}</Link>
                                <FiChevronRight />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Breadcrumb;