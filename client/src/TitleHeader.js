import { Header, Image } from 'semantic-ui-react'
import logo from "./photos/icons8-typewriter-with-paper-50.png"



function TitleHeader() {
    return (
      <div style={{textAlign:"center"}}>

      <Header as='h1'>
        <Header.Content>
          <Image 
          src={logo}
          style={{float:"left"}}
          /> 
          Messaging Board
          </Header.Content>
      </Header>
      <hr/>

      </div>
  

    );
  }
  
  export default TitleHeader;