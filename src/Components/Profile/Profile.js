import React from "react";
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.js'
import MyPosts from './MyPosts/MyPosts.js'

const Profile = (props) => {

    return(

        <div>
            <ProfileInfo />
            <MyPosts
                postData={props.profilePage.postData}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    )
};

export default Profile;
