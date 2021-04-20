import React, {useState } from 'react';
import './style.css';
import ButtonContrate from '../ButtonContrate';
import Logo from '../Logo';
import ButtonItemMenu from './components/ButtonItemMenu';
import ListNavContainer from './components/ListNavContainer';
import ContainerMenuMobile from './components/ContainerMenuMobile';

function Menu() {

    const [on, setOn] = useState('');

    const alturaAtualScroll = 300;

    function clickNavButton(idMenu) {

        
        const elementos = document.querySelectorAll('.OptionMenuContainer');
        const elIdMenu = document.querySelector(idMenu);
        const classe = [...elIdMenu.classList];
        const menus = [...elementos];
        
        if (classe.length > 1) { //possui o open
            menus.map((el) => { //limpa de todos
                el.classList.remove('open');
            });
        } else { //não possoi open
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
                    <Logo titulo='Consultoria Fiscal e Tributária' classe='logo' animate={on} />

                    <ContainerMenuMobile />

                    <ListNavContainer>
                        <ButtonItemMenu titulo='Inicio' url='#'/>
                        
                        <ButtonItemMenu onClick={()=>{clickNavButton('#servicos')}} titulo='Serviços' icon='active' idMenu='servicos'>
                            {[
                                { titulo: 'BPO Fiscal', url: '#' },
                                { titulo: 'BPO Contábil', url: '#' },
                                { titulo: 'BPO Folha de Pagamento', url: '#' },
                                { titulo: 'Staff Loan', url: '#' },
                                { titulo: 'Paralegal', url: '#' },
                                { titulo: 'Projetos Especiais', url: '#' },
                            ]}
                        </ ButtonItemMenu>
                        
                        <ButtonItemMenu onClick={()=>{clickNavButton('#sobrenos')}} titulo='O CLF' icon='active' idMenu='sobrenos'>
                            {[
                                { titulo: 'Quem Somos', url: '#' },
                                { titulo: 'Blog', url: '#' },
                                { titulo: 'Dúvidas', url: '#' }
                            ]}
                        </ ButtonItemMenu>

                        <ButtonItemMenu titulo='Contato' url='#'/>
                    </ ListNavContainer>

                    <ButtonContrate classe='unLight buttonContrate' titulo='Contrate' />
                </div>
            </header>


        </>
    )
}


export default Menu;