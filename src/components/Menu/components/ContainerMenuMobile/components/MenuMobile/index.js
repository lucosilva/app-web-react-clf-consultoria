import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Logo from '../../../../../Logo';
import { FiX } from "react-icons/fi";

function MenuMobile() {
    
    return (
        <div className='MenuMobile'>
            <div className="container">
                <div className='menumobile-header'>
                    <Logo titulo='Consultoria Fiscal e Tributária' classe='logo' />                    
                </div>
                <div className="menumobile-body">
                    <div className="item-menu-mobile">
                        <Link to="/">Inicio</Link>
                    </div>

                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Serviços
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <Link to="/servicos/bpo-fiscal/">BPO Fiscal</Link>
                                    <Link to="/servicos/bpo-contabil/">BPO Contábil</Link>
                                    <Link to="/servicos/bpo-folha/">BPO Folha de Pagamento</Link>
                                    <Link to="/servicos/staff-loan/">Staff Loan</Link>
                                    <Link to="/servicos/paralegal/">Paralegal</Link>
                                    <Link to="/servicos/projetos-especiais/">Projetos Especiais</Link>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    O CLF
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <Link to="/historia/">Quem Somos</Link>
                                    <a href="http://consultoriatributariaefiscal.blogspot.com/" target="_blank">Blog</a>
                                    <Link to="/duvidas/">Dúvidas</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-menu-mobile">
                        <Link to="/contato/">Contato</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile;