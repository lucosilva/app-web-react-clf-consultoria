//eslint no-use-before-define: 0

import React from 'react';
import './style.css';

import DefaulComponents from '../../components/DefaultComponents';
import MainBanner from '../../components/BannerLevelTree';
import bg from '../../assets/outros/BG.png';
import Contrate from '../../components/Contrate';
import ChamadaServicos from './Components/ChamadaServicos';
import Social from '../../components/MainBanner/components/Social';

import cosmo from '../../assets/eu.jpg';
import janaina from '../../assets/janaina.jpeg';

function Historia() {
        
    return (
        <DefaulComponents>
            <MainBanner titulo='Quem Somos?' subtitulo='conheça melhor nossa história' />

            <div className="wording">
                <div className="container">
                    <div className="title">
                        <h2>Sua empresa tratada como grande!</h2>
                    </div>
                    <div className='wording-body'>
                        <div className="container">
                            <h3>Nosso proposito</h3>
                            <div>
                                <p>
                                    O Brasil é um país que possui uma complexa legislação fiscal que está em atualização constante.
                                    <br />
                                    <br />
                                    Muitas vezes as empresas não conseguem acompanhar todas essas mudanças, por conta de estarem ocupadas com o cumprimento dos prazos referente aos impostos e obrigações acessórias.
                                </p>
                                <p>
                                    Observando essa dificuldades enfrentadas pelas empresas é que surgiu a CLF Consultoria Fiscal e Tributária.
                                    <br />
                                    <br />
                                    Somos uma empresa focada na prestação de serviços relacionados a área fiscal e tributária, especializada em impostos indiretos.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="theJourney">

                <div className="container">
                    <div className='bg'>
                        <img src={bg} alt='alt' />
                    </div>
                    <h2>A jornada</h2>
                </div>

                <div className="theJourney-body">
                    <div className="container" style={{ 'display': 'block' }}>
                        <h3>Depoimento da CEO</h3>
                        <div>
                            <div className='text-item'>
                                <p>
                                    Há alguns anos atrás surgiu o desejo de ingressar para a área contábil, fiz um cursinho básico de contabilidade e fui indicada para trabalhar em um escritório de contabilidade no departamento fiscal.
                                </p>
                                <p>
                                    Ali começa minha experiência, conforme ia aprendendo, sentia cada vez mais o desejo de crescer nessa área, comecei a estudar, me formei e pós graduei em Gestão Tributária, fiz vários cursos de atualização a cada assunto novo que surgia.
                                </p>

                                <p>
                                    Não me limitei a trabalhar em apenas um único lugar, o universo tributário é muito expansivo, e em cada escritório que passei aprendi coisas novas, novos métodos de trabalho e no decorrer dos anos fui sendo moldada ao extrair um pouquinho de todo o conhecimento adquirido ao longo de minha carreira.
                                </p>

                            </div>
                            <div className='text-item'>
  
                                <p>
                                    Chegou a pandemia, e com ela muitos tiveram que se adaptar a um novo método de trabalho, outros tiveram que se reinventar frente à crise, e foi aí que eu também senti que precisava fazer algo, já que estava sem emprego.
                                </p>
                                <p>
                                    Pensei em toda a experiência e formação que tinha na área tributária, conversei com meu marido e também meu sócio o que ele pensava a respeito, e como sempre ele me apoiou.
                                
                                    Foi então que surgiu a CLF Consultoria Fiscal e Tributária.
                
                                    Procuramos nos consolidar cada vez mais no mercado e oferecer aos nossos clientes o atendimento único que cada um merece!
                                </p>

                                <div className="author">
                                    <div className="photo">
                                        <img src={janaina} alt="" />
                                    </div>
                                    <div className="description">
                                        <h4>Janaina Correia da Silva</h4>
                                        <span>Founder & CEO</span>
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="theJourney-body">
                    <div className="container" style={{ 'display': 'block' }}>
                        <h3>Depoimento do Socio</h3>
                        <div>
                            <div className='text-item'>
                                <p>
                                Tenho experiência de 20 anos na área e durante esse tempo eu atendi as mais diversas empresas, seja ela pequena, média ou grandes multinacionais.
                                </p>
                                <p>
                                E durante a minha jornada profissional eu sempre fui instruído a tratar os grandes com prioridade, e isso sempre me incomodou, visto que os clientes menores são os que mais precisam de acompanhamento.
                                </p>
                            </div>
                            <div className='text-item'>
                                <p>
                                Para mudar essa realidade é que surgiu a CLF Consultoria Fiscal e Tributária, para ajudar a sua empresa a crescer oferecendo um atendimento personalizado e exclusivo.
                                </p>

                                <div className="author">
                                    <div className="photo">
                                        <img src={cosmo} alt="" />
                                    </div>
                                    <div className="description">
                                        <h4>Cosmo Luiz de França</h4>
                                        <span>Business partner</span>
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Contrate />
            <ChamadaServicos />
        
        </ DefaulComponents >
    );
}

export default Historia;