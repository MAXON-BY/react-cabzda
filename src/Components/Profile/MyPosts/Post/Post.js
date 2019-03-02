import React from "react";
import './Post.css';

const Post = (props) => {
    return(
        <div className='postSingle'>
            <div className='postAvatar'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWMCZMoM6rKk6Mh7xrS6HIH1OgXICAJJs4wpJ0WtGwN1xOh23UA" alt="" />
            </div>
            <div className="postText">
                {props.message}
            </div>
            <div className="postLike">
                <p>Likes: {props.likes}</p>
            </div>
        </div>
    )
}

export default Post;
