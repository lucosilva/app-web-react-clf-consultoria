import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <>
            <h1>Pagina Não Encontrada!!</h1>
            <p>Volte para a home</p>
            <Link to="/">
                ir para Home
            </Link>
        </>
    )
}

export default Page404;