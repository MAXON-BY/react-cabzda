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

let dialogs = [
    {id:1, name:'Igor'},
    {id:2, name:'Max'},
    {id:3, name:'Valera'},
    {id:4, name:'Kate'},
    {id:5, name:'Maxon'},
    {id:6, name:'Jane'},
    {id:7, name:'Kill'},
    {id:8, name:'San'},
    {id:9, name:'Vasia'},
    {id:10, name:'Gopnik'},
];

let dialogElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)

let messages = [
    {id:1, message:'Hello!'},
    {id:2, message:'Yo!'},
    {id:3, message:'Fuck You!'},
];

let dialogMessages = messages.map( m => <Message message={m.message} id={m.id} />)

const Dialogs = () =>{
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