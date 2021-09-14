import TitleHeader from "./TitleHeader";
import Main from "./Main";

import Homepage from "./Homepage";
import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

// COMMANDS THAT WE NEED TO RUN
// npm install --prefix client
// npm install semantic-ui-react semantic-ui-css
// npm start --prefix client
// npm install react-router-dom

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

  if (!user)
    return (
      <div>
        <Route path="/">
          <TitleHeader user={user} />
        </Route>
        <Switch>
          <Route exact path="/login">
            <Login onLogin={setUser} />
          </Route>

          <Route exact path="/signup">
            <Signup onLogin={setUser} />
          </Route>
        </Switch>
      </div>
    );

  return (
    <>
      <TitleHeader user={user}/>
      <Homepage />
      <NavBar user={user} setUser={setUser} />
      <Main />
    </>
  );
}

export default App;
