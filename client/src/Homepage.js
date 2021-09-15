
import Main from "./Main"
import NavBar from "./NavBar";
import Login from "./Login";
import Signup from "./Signup";
import { Switch, Route } from "react-router-dom";



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
      <Main user={user} setUser={setUser} />
    </>
  );
}

export default Homepage;
