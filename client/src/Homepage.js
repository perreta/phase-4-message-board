import TitleHeader from "./TitleHeader";
import {useState, useEffect} from "react";
import App from "./App";

function Homepage() {
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
      <App user={user} setUser={setUser} />
    </>
  );
}

export default Homepage;
