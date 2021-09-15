import React, { useEffect, useState } from "react";
import TitleHeader from "./TitleHeader";
import Homepage from "./Homepage";

// COMMANDS THAT WE NEED TO RUN
// npm install --prefix client 
// npm install semantic-ui-react semantic-ui-css
// npm start --prefix client



function App() {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  // COMMANDS THAT WE NEED TO RUN
  // npm install --prefix client
  // npm install semantic-ui-react semantic-ui-css
  // npm start --prefix client
  // npm install react-router-dom

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <TitleHeader user={user} setToggle={setToggle}/>
      <Homepage user={user} setUser={setUser} toggle={toggle} />
    </>
  );
}

export default App;
