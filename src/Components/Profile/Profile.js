import React from "react";
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'
import MyPosts from './MyPosts/MyPosts.js'

const Profile = (props) => {

    return(

        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.postData}/>
        </div>
    )
};

export default Profile;
