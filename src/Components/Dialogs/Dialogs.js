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
}

const Dialogs = () =>{
    return(
        <div>
            <h2>Dialogs</h2>
            <div className="dialogsWrap">
                <div className="dialogUsers">
                    <ul>
                        <DialogItem name="Igor" id="1"/>
                        <DialogItem name="Max" id="2"/>
                        <DialogItem name="Valera" id="3"/>
                        <DialogItem name="Kate" id="4"/>
                        <DialogItem name="Maxon" id="5"/>
                        <DialogItem name="Jane" id="6"/>
                        <DialogItem name="Kill" id="7"/>
                        <DialogItem name="San" id="8"/>
                        <DialogItem name="Vasia" id="9"/>
                        <DialogItem name="Gopnik" id="10"/>
                    </ul>
                </div>
                <div className="dialogMessages">
                    <Message message="Hello!" />
                    <Message message="What are you doing?" />
                    <Message message="Fuck you!!!" />
                </div>
            </div>
        </div>
    )
};

export default Dialogs;