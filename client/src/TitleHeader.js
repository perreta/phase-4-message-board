import { Header, Image, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./photos/icons8-typewriter-with-paper-50.png";
import profileLogo from "./photos/icons8-name-64.png";
import typingLogo from "./photos/WavyViciousIrishdraughthorse-size_restricted.gif";

function TitleHeader({ user }) {
  return (
    <div style={{ textAlign: "center", padding:"20px"}}>
      <Header as="h1">
        <Header.Content>
          <Image
            src={logo}
            style={{ float: "left", height: "30px", width: "30px" }}
          />
          Messaging Board
          <Image
            src={logo}
            style={{ float: "right", height: "30px", width: "30px" }}
          />
        </Header.Content>

        {user ? (
          <Image
            src={profileLogo}
            style={{
              float: "right",
              height: "50px",
              width: "50px"
            }}
          />
        ) :    <Divider />}
      </Header>

      {user ? null : (
        <div
          style={{
            textAlign: "left",
            paddingRight: "350px",
            paddingLeft: "350px",
            paddingTop: "50px",
          }}
        >
       
          <Header as="h2" style={{ fontWeight: "lighter" }}>
            Welcome to Message Board{" "}
          </Header>
          <Image
            src={typingLogo}
            style={{
              float: "left",
              height: "100px",
              width: "200px",
              paddingRight: "30px",
            }}
          />
          <p style={{ fontSize: "18px" }}>
            Keeping up with friends is faster and easier than ever. Share
            updates, engage with friends, and stay connected to communities
            important to you.
          </p>

          <Link to="/login" style={{ fontSize: "20px" }}>
            Login &ensp;
          </Link>
          <Link to="/signup" style={{ fontSize: "20px" }}>
            &ensp;Singup
          </Link>
        </div>
      )}
    </div>
  );
}

export default TitleHeader;
