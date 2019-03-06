import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';


ReactDOM.render(<App vasia={state}/>, document.getElementById('root'));

// If you want your app to work offlisdfdfsfsdne and load faster, you can change
// unregister() to register() below. Nodfdfgdhkjhkjfgdfte this comes witassfsdfsdh some pitfalls.
// Learn more aboutssdfsdf service workers: http://bit.ly/CRA-PWAsdfsdfsdfsdfsdfsd
serviceWorker.unregister();
