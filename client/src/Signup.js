import { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

function Signup() {
    const [user, setUser] = useState('')
    const [errors, setErrors] = useState('')
    const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    image_url: "",
    bio: "",
  });

  function inputOnChange(e){
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${e.target.name}:${e.target.value}`)
    setUserInput({
        ...userInput, //spreading the userInput
        [name]: value, //inserting the name and value the user typed in
    });
    // e.target.reset();
  }

  function handleSubmit(e){
     e.preventDefault();
    //  console.log("I was clicked")
    fetch('/signup', { 
        method: 'POST',
        headers: {contentType: 'application/json'},
        body: JSON.stringify(userInput)
    })
    .then(res => res.json())
    .then(data => {
        if(data.error){
            setErrors(data)
        } else {
            setUser([...user, userInput])
        }
    })

  }
  return (
    <>
      <h1>Signup Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-username"
            control={Input}
            label="Username"
            name="username"
            placeholder="Username"
            onChange={inputOnChange} 
          />
          <Form.Field
            id="form-input-control-password"
            control={Input}
            label="Password"
            name="password"
            placeholder="Password"
            onChange={inputOnChange} 
          />
          <Form.Field
            id="form-input-control-image"
            control={Input}
            label="Image URL"
            name="image_url"
            placeholder="Image URL"
            onChange={inputOnChange} 
          />
        </Form.Group>

        <Form.Field
          id="form-input-control-bio"
          control={TextArea}
          label="Bio"
          name="bio"
          placeholder="Bio"
          onChange={inputOnChange} 
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default Signup;
