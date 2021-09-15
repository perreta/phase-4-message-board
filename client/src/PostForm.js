import { useState } from "react";
import { Form,TextArea, Button } from "semantic-ui-react";

function PostForm({ setPostArray, user }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newPost = {
      text: text,
    };
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPostArray((prevPosts) => [data, ...prevPosts]);
      });
    event.target.reset();
  }

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div style={{textAlign:"center", paddingRight:"200px",  paddingLeft:"200px", paddingBottom: "50px" }}>
      <Form id="todo-form" onSubmit={handleSubmit}>
        <Form.Field
          label="New Message:"
          name="input"
          autoComplete="off"
          type="text"
          placeHolder="Start Writing..."
          control={TextArea}
          onChange={handleInputChange}
        />
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PostForm;
