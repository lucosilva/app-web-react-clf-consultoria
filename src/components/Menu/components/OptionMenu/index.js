import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import bg from '../../../../assets/outros/BG.png';

function OptionMenu(props) {  

        return (
        <div id={props.idMenu} className='OptionMenuContainer'>
            <div className="container">

                <div className="frame">
                    <span className='text'>{props.titleMenu}</span>

                    <div className="group">
                        {props.listItem.map((item) =>{

                            if( item.externalLink == 'true'){
                                return <a key={item.titulo} className='item-group' href={item.url} target="_blank"> {item.titulo} </a>
                            }
                            else{
                                return  <Link key={item.titulo} className='item-group' to={item.url}> {item.titulo} </Link>
                            }

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