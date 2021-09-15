import PostContainer from './PostContainer'
import Profile from './Profile'


function Main({ user }) {
    return (
      <div style={{textAlign:"center"}}>
        <h1>hello from main!</h1>
        <PostContainer user={user}/>
        <Profile/>
      </div>
    );
  }
  
  export default Main;