import React from 'react';
import './style.css';
import bg from '../../../../assets/outros/BG.png';

function OptionMenu(props) {  

        return (
        <div id={props.idMenu} className='OptionMenuContainer'>
            <div className="container">

                <div className="frame">
                    <span className='text'>Serviços Operacionais</span>

                    <div className="group">
                        {props.listItem.map((item) =>{
                          return  <a key={item.titulo} className='item-group' href={item.url}> {item.titulo} </a>
                        })}
                    </div>

                </div>

            </div>
            <div className="back">
                <img src={bg} />
            </div>
        </div>
    )
}


export default OptionMenu;