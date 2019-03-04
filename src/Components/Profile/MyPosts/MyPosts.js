import React from "react";
import './MyPosts.css'
import Post from './Post/Post.js'

const MyPosts = (props) => {

    let postData = [
        {id:1, message:'First Post', likesCount:15},
        {id:2, message:'This post is 2, not 1', likesCount:5},
    ];

    let postElements = postData.map( p => <Post message={p.message} likes={p.likesCount}/>);

    return(
        <div>
            My posts
            <div className='postAdd'>
                <textarea cols="30" rows="10"></textarea>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className='postList'>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
