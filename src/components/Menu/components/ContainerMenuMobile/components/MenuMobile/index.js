import React from 'react';
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
                        <a href="#">Inicio</a>
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
                                    <a href="#">BPO Fiscal</a>
                                    <a href="#">BPO Contábil</a>
                                    <a href="#">BPO Folha de Pagamento</a>
                                    <a href="#">Staff Loan</a>
                                    <a href="#">Paralegal</a>
                                    <a href="#">Projetos Especiais</a>
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
                                    <a href="#">Quem Somos</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Dúvidas</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item-menu-mobile">
                        <a href="#">Contato</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuMobile;