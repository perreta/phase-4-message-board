import { useEffect, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

function Login() {
  const [errors, setErrors] = useState("");

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function loginOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${e.target.name}:${e.target.value}`);
    setUser({
      ...user, //spreading the userInput
      [name]: value,
    });
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("login click")

    fetch("/login", {
      method: "POST",
      headers: { contentType: "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrors(data);
        } else {
          setUser(user);
        }
      });
  };

  return (
    <>
      <h1>LOGIN PAGE</h1>
      <Form onSubmit={loginSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label="Username"
            placeholder="Username"
            name="username"
            onChange={loginOnChange}
          />
          <Form.Field
            id="form-input-control-password"
            control={Input}
            label="Password"
            placeholder="Password"
            name="password"
            onChange={loginOnChange}
          />
        </Form.Group>
        <Button>Login</Button>
      </Form>
    </>
  );
}

export default Login;
//testing