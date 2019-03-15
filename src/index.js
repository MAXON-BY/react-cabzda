import * as serviceWorker from './serviceWorker';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/state';


let rerendeerEntireTree = (state) => {
    ReactDOM.render(<App
        vasia={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
    />, document.getElementById('root'));
};
rerendeerEntireTree(store.getState());

store.subscribe(rerendeerEntireTree);
// If you want your app to work offlisdfdfsfsdne and load faster, you can change
// unregister() to register() below. Nodfdfgdhkjhkjfgdfte this comes witassfsdfsdh some pitfalls.
// Learn more aboutssdfsdf service workers: http://bit.ly/CRA-PWAsdfsdfsdfsdfsdfsd
serviceWorker.unregister();
