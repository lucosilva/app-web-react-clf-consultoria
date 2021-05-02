import React, { useEffect } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { solutionBackToTop, ButtonBackToTop } from '../BackToTop';


function Default(props) {

    useEffect(() => {
        solutionBackToTop();

        const sectionList = [...document.querySelectorAll('section')];
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
        </>
    );
}

export default Default;
