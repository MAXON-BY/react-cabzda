import * as serviceWorker from './serviceWorker';
import './index.css';
import state from "./Redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from './Redux/state';


let rerendeerEntireTree = (state) => {
    ReactDOM.render(<App
        vasia={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
    />, document.getElementById('root'));
};
// If you want your app to work offlisdfdfsfsdne and load faster, you can change
// unregister() to register() below. Nodfdfgdhkjhkjfgdfte this comes witassfsdfsdh some pitfalls.
// Learn more aboutssdfsdf service workers: http://bit.ly/CRA-PWAsdfsdfsdfsdfsdfsd
serviceWorker.unregister();
