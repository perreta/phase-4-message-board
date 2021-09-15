import { useState, useEffect } from "react";
import Post from "./Post.js";
import PostForm from "./PostForm";

function PostContainer({ user }) {
  const [postArray, setPostArray] = useState([]);
  useEffect(() => {
    fetch("/posts")
      .then((resp) => resp.json())
      .then((data) => setPostArray(data));
  }, []);

  const post = postArray.map((post) => {
    return (
      <>
        {user ? (
          <Post
            user={user}
            key={post.id}
            id={post.id}
            content={post.text}
            username={post.user.username}
            avatar={post.user.profile_picture}
            date={post.date}
            updatedDate={post.updated_date}
            postArray={postArray}
            setPostArray={setPostArray}
          />
        ) : null}
      </>
    );
  });

  return (
    <>
      <PostForm user={user} setPostArray={setPostArray} />
      <div className="posts">{post}</div>
    </>
  );
}

export default PostContainer;
