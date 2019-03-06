import React from "react";
import {NavLink} from 'react-router-dom';
import './Dialogs.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return(
        <li><NavLink to={path}>{props.name}</NavLink></li>
    )
};

const Message = (props) => {
    return(
        <div className="dialogWindow">
            <p>{props.message}</p>
        </div>
    )
};

const Dialogs = (props) =>{

    let dialogElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let dialogMessages = props.state.messages.map( m => <Message message={m.message} id={m.id} />)

    return(
        <div>
            <h2>Dialogs</h2>
            <div className="dialogsWrap">
                <div className="dialogUsers">
                    <ul>
                        {dialogElements}
                    </ul>
                </div>
                <div className="dialogMessages">
                    {dialogMessages}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;