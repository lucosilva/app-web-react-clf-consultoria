import React from 'react';
import DefaulComponents from '../../components/DefaultComponents';
import MainBanner from '../../components/MainBanner';
import ServicosList from './components/ServicosCardList';
import ChamadaContato from './components/ChamadaContato';
import ChamadaHistoria from './components/ChamadaHistoria';


function Home() {

    return (
        <DefaulComponents>
            <MainBanner />
            <ChamadaContato />
            <ServicosList />
            <ChamadaHistoria />
        </DefaulComponents>
    )
}

export default Home;