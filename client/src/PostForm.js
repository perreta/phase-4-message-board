import { useState } from "react"

function PostForm({ setPostArray, user }){
    const [ text, setText ] = useState("")


    function handleSubmit(event) {
        event.preventDefault()
        const newPost = { 
            text: text,
            user_id: user.id,


        }
        fetch('/posts', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(newPost)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setPostArray(prevPosts => [data, ...prevPosts]) 
        })
        event.target.reset()
        
    }

    function handleInputChange(event){
        setText(event.target.value)
    }

    return (
        <>
            <form id="todo-form" onSubmit={handleSubmit}>
                    <label className="label1">
                        New Message: 
                        <br/>
                        <input onChange={handleInputChange} type="text" name="input" />
                    </label>        
                    <input className="submit-button" type="submit" value="Submit" />
            </form>
        </>
    )
}

export default PostForm
