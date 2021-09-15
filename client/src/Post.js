import { useState } from 'react'
import './Hidden.css'

function Post ({ id, content, username, avatar, date, updatedDate, postArray, setPostArray }) {   
    const [isClicked, setIsClicked] = useState(false)
    const [updatedText, setUpdatedText] = useState("")

    function handleRemove() {
        fetch(`/posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const postsToDisplay = postArray.filter((post) => {
            console.log(post.id, id)
            if (post.id === id) return false
            else return true
        })
        setPostArray(postsToDisplay)
    }

    function handleEdit(e){
        e.preventDefault()
        fetch(`/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: updatedText
            }),
        })
        .then(res => res.json())
        .then(updatedPost => handleUpdatePost(updatedPost))
        setIsClicked(!isClicked)
    }
   
    function handleUpdatePost(updatedPost) {
        const updatedPostsArray = postArray.map((post) => {
          return post.id === updatedPost.id ? updatedPost : post;
        });
        setPostArray(updatedPostsArray);
    }
    
    function handleEditClick(e){
        setIsClicked(prevIsClicked => !prevIsClicked)
    }
    
    function handleInputChange(event){
        setUpdatedText(event.target.value)
    }

    return(
        <>
            <div className="post" style={{ padding: 5, border: "2px solid gray" }}>
                <img src={avatar} alt="user avatar" style={{maxWidth: 250}}/>
                <h1>{username}</h1>
                {updatedDate === date ? <h3>{date}</h3> : <h3>Updated: {updatedDate}</h3>}
                {!isClicked ? 
                <p>{content}</p> : 
                <form id="post-update" onSubmit={handleEdit}>
                    <label className="label1">
                        Update Post: 
                        <br/>
                        <input onChange={handleInputChange} type="text" name="input"/>
                    </label>        
                    <input className="submit-button" type="submit" value="Update" />
                </form>}
                <button onClick={handleEditClick} className={!isClicked ? "edit" : "hidden"}>Edit</button>
                <button onClick={handleRemove} className="remove">Delete</button>
            </div>
            <br/>
        </>
    )
}

export default Post