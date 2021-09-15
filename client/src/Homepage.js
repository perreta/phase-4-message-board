
import Main from "./Main"
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import { Switch, Route } from "react-router-dom";

// COMMANDS THAT WE NEED TO RUN
// npm install --prefix client
// npm install semantic-ui-react semantic-ui-css
// npm start --prefix client
// npm install react-router-dom

function Homepage({user, setUser}) {
  if (!user)
    return (
      <div>
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
      <NavBar user={user} setUser={setUser} />
      <Main user={user}/>
    </>
  );
}

export default Homepage;
