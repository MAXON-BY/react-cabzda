import React from "react";
import './Profile.css'
import MyPosts from './MyPosts/MyPosts.js'

const Profile = () => {
    return(
        <div>
            <div>
                <img
                    src="https://uguide.ru/_nw/1/s58303849.jpg"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;
