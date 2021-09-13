import { useState } from 'react';

function Post ({ id, content, username, avatar, postArray, setPostArray }) {   

    function handleRemove(e) {
        console.log(e.target)
        fetch(`/posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const postsToDisplay = postArray.filter((post) => {
            if (post.id === id) return false
            else return true
        })
        setPostArray(postsToDisplay)
    }

   
    
    return(
        <div className="post">
            <img src={avatar} alt="user profile picture"/>
            <h1>{username}</h1>
            <p>{content}</p>
            <button onClick={handleRemove} className="remove">Delete</button>
        </div>
    )
}

export default Post