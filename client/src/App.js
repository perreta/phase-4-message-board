import TitleHeader from "./TitleHeader";
import {useState, useEffect} from "react";
import Homepage from "./Homepage";

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

  return (
    <>
      <TitleHeader user={user} />
      <Homepage user={user} setUser={setUser} />
    </>
  );
}

export default App;
