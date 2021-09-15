import { useState, useEffect } from "react";
import ProfileUpdate from "./ProfileUpdate";
import { Route } from "react-router-dom";

function Profile({user, setUser}) {
  // console.log(user);
  return (
    <>
    {user ? (
      <>
      <h1>Profile</h1>
      <h2>{user.username}</h2>
      <img src={user.profile_picture} alt="user profile picture" />
      <p>Bio: {user.bio}</p>
      <h3>Posts</h3>
      <li>{user.posts.map(post => post.text)}</li>
      <br />
      <h3>Edit Profile</h3>
      <Route exact path="/profile-edit">
        <ProfileUpdate user={user} setUser={setUser}/>
      </Route>
      </>)
    : null} </> 
  );
}
  
export default Profile;