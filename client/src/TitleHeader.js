import { Header, Image } from 'semantic-ui-react'
import logo from "./photos/icons8-typewriter-with-paper-50.png"
import profileLogo from "./photos/icons8-name-64.png"
import { Link } from "react-router-dom";



function TitleHeader({ setToggle, toggle }) {

  function handleClick(e) {
    setToggle(!toggle)
  }
    return (
      <div style={{textAlign:"center"}}>

      <Header as='h1'>
        <Header.Content>
          <Image 
          src={logo}
          style={{float:"left"}}
          /> 
          Messaging Board

          <Link to='/profile-edit'>
            <Image 
            src={profileLogo}
            style={{float:"right", height:"50px", width:"50px"}}
            onClick={handleClick}
            />
          </Link>
          
          </Header.Content>
      </Header>
      <hr/>

      </div>
  

    );
  }
  
  export default TitleHeader;