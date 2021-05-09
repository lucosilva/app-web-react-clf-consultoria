import React from 'react';
import DefaulComponents from '../../components/DefaultComponents';
import MainBanner from '../../components/MainBanner';
import Contrate from '../../components/Contrate';
import ChamadaServicos from './components/ChamadaServicos';
import ChamadaContato from './components/ChamadaContact';
import ChamadaHistoria from './components/ChamadaHistoria';


function Home() {

    return (
        <DefaulComponents>
            <MainBanner />
            <Contrate />
            <ChamadaServicos />
            <ChamadaContato />
            <ChamadaHistoria />
        </DefaulComponents>
    )
}

export default Home;