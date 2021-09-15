import PostContainer from './PostContainer'
import Profile from './Profile'
import NavBar from './NavBar'
// import { Switch, Route } from "react-router-dom";


function Main({ user, setProfilePage }) {

    return (
      <div style={{textAlign:"center"}}>
        <h1>Posts 🤓</h1>
        <NavBar user={user} />
        <PostContainer/>
        <Profile />
      </div>
    );
  }
  
  export default Main;