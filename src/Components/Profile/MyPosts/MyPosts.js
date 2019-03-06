import React from "react";
import './MyPosts.css'
import Post from './Post/Post.js'

const MyPosts = (props) => {

    let postElements = props.postData.map( p => <Post message={p.message} likes={p.likesCount}/>);

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
