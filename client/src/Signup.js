import { useState } from "react";
import { Form, Input, TextArea, Button, Header } from "semantic-ui-react";

function Signup({ onLogin }) {
  const [errors, setErrors] = useState([]);

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    profile_picture: "",
    bio: "",
  });

  function inputOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({
      ...userInput, //spreading the userInput
      [name]: value, //inserting the name and value the user typed in
    });
    // e.target.reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    //  console.log("I was clicked")
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  return (
    <div style={{paddingRight:"300px", paddingLeft:"300px", paddingTop:"100px", paddingBottom:"100px"}}>
       <Header as="h2">Sign Up Page</Header>
      {errors.map(error => <h2>{error}</h2>)}
      <Form onSubmit={handleSubmit}>
        <Form.Group  widths='equal' >
          <Form.Field
            fluid
            id="form-input-control-username"
            control={Input}
            label="Username"
            name="username"
            placeholder="Username"
            autoComplete="off"
            onChange={inputOnChange}
          />
          <Form.Field
            fluid
            id="form-input-control-password"
            control={Input}
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="off"
            onChange={inputOnChange}
          />
          <Form.Field
            fluid
            id="form-input-control-image"
            control={Input}
            label="Image URL"
            name="profile_picture"
            placeholder="Image URL"
            onChange={inputOnChange}
          />
        </Form.Group>

        <Form.Field
          fluid
          id="form-input-control-bio"
          control={TextArea}
          label="Bio"
          name="bio"
          placeholder="Bio"
          onChange={inputOnChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Signup;
