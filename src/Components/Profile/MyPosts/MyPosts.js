import React from "react";
import './MyPosts.css'
import Post from './Post/Post.js'

const MyPosts = () => {
    return(
        <div>
            My posts
            <div className='postAdd'>
                <textarea cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </div>
            <div className='postList'>
                <Post message='Hello Everybody!' likes='15'/>
                <Post message='This post is 2, not 1' likes='5'/>
            </div>
        </div>
    )
}

export default MyPosts;
