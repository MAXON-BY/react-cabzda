import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Friends = (props) => {
    return(
        <li>
            <div><img src={props.src} alt="#"/></div>
            <p>{props.friend}</p>
        </li>
    )
};

const Navbar = (props) => {

    let friendList = props.friendList.friends.map( f => <Friends friend={f.friend} id={f.id} src={f.avaSrc} />);

    return(
        <div className='sidebar'>
            <nav className='nav'>
                <ul>
                    <li className='item'><NavLink to="/">Profile</NavLink></li>
                    <li className='item'><NavLink to="/dialogs">Messages</NavLink></li>
                    <li className='item'><NavLink to="/news">News</NavLink></li>
                    <li className='item'><NavLink to="/music">Music</NavLink></li>
                    <li className='item'><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>

            <div className="friends">
                <h3>Friends</h3>
                <ul>
                    {friendList}
                </ul>
            </div>
        </div>

    )
};

export default Navbar;
