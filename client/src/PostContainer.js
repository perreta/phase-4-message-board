import { useState, useEffect } from "react";
import Post from "./Post.js";
// import PostForm from "./PostForm"

function PostContainer() {
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    fetch("/posts")
      .then((resp) => resp.json())
      .then((data) => setPostArray(data));
  }, []);

  const post = postArray.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        content={post.text}
        username={post.username}
        avatar={post.profile_picture}
        postArray={postArray}
        setPostArray={setPostArray}
      />
    );
  });

  return (
    <>
      {/* <PostForm setPostArray={setPostArray}/> */}
      <p>hello post</p>
      <div className="posts">{post}</div>
    </>
  );
}

export default PostContainer;
