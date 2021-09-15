import TitleHeader from './TitleHeader'
import Main from './Main'
import Login from './Login'
import Homepage from './Homepage'
import Signup from './Signup';
import NavBar from './NavBar';
import React, { useEffect, useState } from "react"; 
// import { Switch, Route } from "react-router-dom";

// COMMANDS THAT WE NEED TO RUN
// npm install --prefix client 
// npm install semantic-ui-react semantic-ui-css
// npm start --prefix client



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
  <div >
    <TitleHeader/>
    <Login onLogin={setUser} />
    <Signup onLogin={setUser} />
  </div>
  );

  return (
    <>
      <TitleHeader/>
      <Homepage/>
      <NavBar user={user}/>
      <Main user={user}/>
    </>
  );
}

export default App;
