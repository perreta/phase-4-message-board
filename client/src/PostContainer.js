import { useState, useEffect } from "react"
import Post from "./Post.js"
// import PostForm from "./PostForm"

function PostContainer () { 
    
    const [ postArray, setPostArray ] = useState([])
    useEffect(() => {
        fetch("/posts")
            .then(resp=>resp.json())
            .then(data=>setPostArray(data))
    }, [])
    const post = postArray.map(post => {
        console.log(post.date)
        return <Post key={post.id} id={post.id} content={post.text} username={post.user.username} avatar={post.user.profile_picture} date={post.date} postArray={postArray} setPostArray={setPostArray} />
    })

    
    return (
        <>
           {/* <PostForm setPostArray={setPostArray}/> */}
           <div className="posts">
                {post}
           </div>
        </>
    )
}

export default PostContainer
