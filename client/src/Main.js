import PostContainer from './PostContainer'
import Profile from './Profile'


function Main({user}) {
    return (
      <div style={{textAlign:"center", paddingRight:"200px",  paddingLeft:"200px", paddingBottom:"200px" }}>
        <h1>{user.username}'s Messaging Board </h1>
        <PostContainer/>
        <Profile/>
      </div>
    );
  }
  
  export default Main;