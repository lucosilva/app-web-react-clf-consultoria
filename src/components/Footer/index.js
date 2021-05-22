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
                        <h3> Sua empresa tratada como grande. </h3>

                        <ButtonContrate classe='light buttonContrate' titulo='Contato' link='/contato/' />
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
                                {/* <li><Link to="/parceiros/">Parceiros</Link></li> */}
                                 {/* eslint-disable-next-line */}
                                <li><a href="http://consultoriatributariaefiscal.blogspot.com/" target="_blank">BLOG</a></li>
                            </ul>
                        </div>
                        <div className="menuItem contato">
                            <div className="header">
                             <span> Contato </span>                            
                            </div>
                            <ul>
                                <li>Fique à vontade para entrar em contato conosco por telefone ou enviar mensagem.</li>
                                <li><a href='tel:1123381893'>(11) 2338-1893</a></li>
                                <li><a href='tel:964674634'>(11) 9 6467-4634</a></li>
                                <li><a href='mailto:contato@clf.srv.br?subject=gostaria de solicitar um orçamento'>contato@clf.srv.br</a></li>
                            </ul>
                        </div>                
                    </nav>
                </div>
                <div className="container-bottom">
                    <span>©clf 2021, todos os direitos reservados.</span>

                    <Social 
                    facebook="https://www.facebook.com/clf.consultoriatributaria" 
                    instagram="https://www.instagram.com/clf.consultoriatributaria/" 
                    linkedin="https://www.linkedin.com/in/clfconsultoriafiscal-clf-35637020b/" />

                </div>
            </div>
        </footer>
    );
}

export default Footer;