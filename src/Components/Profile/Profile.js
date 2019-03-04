import React from "react";
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'
import MyPosts from './MyPosts/MyPosts.js'

const Profile = () => {
    return(
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;
