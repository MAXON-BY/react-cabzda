import React from "react";
import './MyPosts.css'
import Post from './Post/Post.js'

const MyPosts = (props) => {

    let postElements = props.postData.map( p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text =  newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('')
    };

    let onPostChange = () => {
        let text =  newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return(
        <div className='postPage'>
            My posts
            <div className='postAdd'>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                ></textarea>
                <div>
                    <button onClick={addPost} value='button'>Add Post</button>
                </div>
            </div>
            <div className='postList'>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
