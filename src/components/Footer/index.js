import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Logo from '../Logo';
import ButtonContrate from '../ButtonContrate';
import Social from '../MainBanner/components/Social';

function Footer() {
    
    return (
        <footer>
            <div className="container">
                <div className="context">
                    <div className="apresentation">
                        <Logo titulo='Consultoria Fiscal e Tributária' classe='logo' color='white' />
                        <h3> Sua empresa sendo tratada como grande. </h3>

                        <ButtonContrate classe='light buttonContrate' titulo='Contrate' link='/formulario/' />
                    </div>
                    <nav>
                        <div className="menuItem">
                            <div className="header">
                             <span> Servições </span>                            
                            </div>
                            <ul>
                                <li><Link to="/servicos/bpo-fiscal/">BPO Fiscal</Link></li>
                                <li><Link to="/servicos/bpo-contabil/">BPO Contabil</Link></li>
                                <li><Link to="/servicos/bpo-folha/">BPO Folha</Link></li>
                                <li><Link to="/servicos/paralegal/">Paralegal</Link></li>
                                <li><Link to="/servicos/staff-loan/">STAFF LOAN</Link></li>
                                <li><Link to="/servicos/projetos-especiais/">Projetos Especiais</Link></li>
                            </ul>
                        </div>
                        <div className="menuItem">
                            <div className="header">
                             <span> Sobre nós </span>                            
                            </div>
                            <ul>
                                <li><Link to="/historia/">Quem somos</Link></li>
                                <li><Link to="/parceiros/">Parceiros</Link></li>
                                <li><a href="http://consultoriatributariaefiscal.blogspot.com/" target="_blank">BLOG</a></li>
                            </ul>
                        </div>
                        <div className="menuItem contato">
                            <div className="header">
                             <span> Contato </span>                            
                            </div>
                            <ul>
                                <li>Fique à vontade para entrar em contato conosco por telefone ou enviar mensagem.</li>
                                <li><a href='tel:1128689751'>(11) 2868-9751</a></li>
                                <li><a href='mailto:faleconosco@clf.com?subject=gostaria de solicitar um orçamento'>faleconosco@clf.com</a></li>
                            </ul>
                        </div>                
                    </nav>
                </div>
                <div className="container-bottom">
                    <span>©clf 2021, todos os direitos reservados.</span>

                    <Social facebook="#" instagram="#" linkedin="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;