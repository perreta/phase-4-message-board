import PostContainer from './PostContainer'
import Profile from './Profile'
import NavBar from './NavBar'
// import { Switch, Route } from "react-router-dom";



function Main({ user , setUser}) {
    return (
      <div style={{textAlign:"center", paddingRight:"200px",  paddingLeft:"200px", paddingBottom:"200px" }}>
        <h1>{user.username}'s Messaging Board </h1>
        <PostContainer user={user}/>
        <Profile user={user} setUser={setUser}/>
      </div>
    );
  }
  
  export default Main;