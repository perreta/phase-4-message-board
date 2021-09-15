import { useState, useEffect } from "react";
import Post from "./Post.js";
import PostForm from "./PostForm"

function PostContainer ({ user }) { 
    
    const [ postArray, setPostArray ] = useState([])
    useEffect(() => {
        fetch("/posts")
            .then(resp=>resp.json())
            .then(data=>setPostArray(data))
    }, [])
    
    const post = postArray.map(post => {
        return <Post key={post.id} id={post.id} content={post.text} username={post.user.username} avatar={post.user.profile_picture} date={post.date} updatedDate={post.updated_date} createdAt={post.created_at} updatedAt={post.updated_at} postArray={postArray} setPostArray={setPostArray} />
    })
    
    return (
        <>
           <PostForm user={user} setPostArray={setPostArray}/>
           <div className="posts">
                {post}
           </div>
        </>
    )
}

export default PostContainer;
