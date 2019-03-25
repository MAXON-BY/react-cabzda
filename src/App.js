import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {Route, BrowserRouter} from "react-router-dom"

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar friendList={props.vasia.sidebar}/>

                <div className='content-wrapper'>
                    <Route exact path='/'
                           render={ () => <Profile
                               profilePage={props.vasia.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}
                    />
                    <Route path='/dialogs' render={ () => <Dialogs state={props.vasia.dialogsPage}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' render={ ()=> <News newws ={props.vasia.newsPage}/>}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
