/* eslint-disable no-use-before-define */

import React from 'react';
import './style.css';
// import ButtonContrate from '../ButtonContrate';
import Logo from '../Logo';
import ButtonItemMenu from './components/ButtonItemMenu';
import ListNavContainer from './components/ListNavContainer';
import ContainerMenuMobile from './components/ContainerMenuMobile';

function Menu() {

    function clickNavButton(idMenu) {


        const elementos = document.querySelectorAll('.OptionMenuContainer');
        const elIdMenu = document.querySelector(idMenu);
        const classe = [...elIdMenu.classList];
        const menus = [...elementos];

        if (classe.length > 1) { //possui o open
            // eslint-disable-next-line 
            menus.map((el) => { //limpa de todos
                el.classList.remove('open');
            });
        } else { //não possoi open
            // eslint-disable-next-line 
            menus.map((el) => { //limpa de todos
                
                el.classList.remove('open');
            });

            elIdMenu.classList.add('open'); //adicionou open nessa menu
        }
    }

    return (
        <>
            <header>
                <div className="container">
                    <Logo titulo='Consultoria Fiscal e Tributária' classe='logo' animate='on' link='/' />

                    <ContainerMenuMobile />

                    <ListNavContainer>
                        <ButtonItemMenu titulo='Inicio' url='/' />

                        <ButtonItemMenu onClick={() => { clickNavButton('#servicos') }} titulo='Serviços' icon='active' idMenu='servicos' titleMenu='Serviços Operacionais'>
                            {[
                                { titulo: 'BPO Fiscal', url: '/servicos/bpo-fiscal/' },
                                { titulo: 'Paralegal', url: '/servicos/paralegal/' },
                                { titulo: 'BPO Folha de Pagamento', url: '/servicos/bpo-folha/' },
                                { titulo: 'Staff Loan', url: '/servicos/staff-loan/' },
                                { titulo: 'BPO Contábil', url: '/servicos/bpo-contabil/' },
                                { titulo: 'Projetos Especiais', url: '/servicos/projetos-especiais/' },
                            ]}
                        </ ButtonItemMenu>

                        <ButtonItemMenu onClick={() => { clickNavButton('#sobrenos') }} titulo='O CLF' icon='active' idMenu='sobrenos' 
                        titleMenu='Um pouco sobre nós'>
                            {[
                                { titulo: 'Quem Somos', url: '/historia/' },
                                { titulo: 'Privacidade', url: '/privacidade/' },
                                { titulo: 'Blog', externalLink:'true', url:'http://consultoriatributariaefiscal.blogspot.com/' }
                            ]}
                        </ ButtonItemMenu>

                        <ButtonItemMenu titulo='Contato' url='/contato/' />
                    </ ListNavContainer>

                    {/* <ButtonContrate classe='unLight buttonContrate' titulo='Contrate'  /> */}
                </div>
            </header>


        </>
    )
}


export default Menu;