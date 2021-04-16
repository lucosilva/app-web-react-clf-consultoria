import React from 'react';
import './style.css';

function ListNavContainer(props) {
    return (
        <nav>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}


export default ListNavContainer;