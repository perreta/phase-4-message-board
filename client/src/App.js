import TitleHeader from "./TitleHeader";
import Homepage from "./Homepage";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

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
      <TitleHeader user={user} />
      <Homepage user={user} setUser={setUser} />
    </>
  );
}

export default App;
