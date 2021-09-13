import { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

function Login({onLogin}) {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function loginOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${e.target.name}:${e.target.value}`);
    setUser({
      ...user, //spreading the userInput
      [name]: value,
    });
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    // console.log("login click")

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.errors) {
          setErrors(data.errors);
        } else {
          onLogin(data);
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
            autoComplete="off"
            onChange={loginOnChange}
          />
          <Form.Field
            id="form-input-control-password"
            control={Input}
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            onChange={loginOnChange}
          />
        </Form.Group>
        {errors.map(error => <div>{error}</div>)}
        <Button>Login</Button>
      </Form>
    </>
  );
}

export default Login;
//testing again and again