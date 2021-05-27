import React, { useEffect } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { solutionBackToTop, ButtonBackToTop } from '../BackToTop';
import PrivacyPolicyModal from '../PrivacyPolicyModal';

function Default(props) {

    useEffect(() => {
        solutionBackToTop();

        const sectionList = [...document.querySelectorAll('section')];

        // eslint-disable-next-line
        sectionList.map((el,index)=>{
            el.setAttribute("id", 'section'+index);
        })


    }, [])


    return (
        <>
            <Menu />
            {props.children}
            <ButtonBackToTop />
            <Footer />

            <PrivacyPolicyModal/>
        </>
    );
}

export default Default;
