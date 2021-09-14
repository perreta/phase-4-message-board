
function Post ({ id, content, username, avatar, date, postArray, setPostArray }) {   

    function handleRemove(e) {
        console.log(e.target)
        fetch(`posts/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        const postsToDisplay = postArray.filter((post) => {
            if (post.id === id) return false
            else return true
        })
        setPostArray(postsToDisplay)
    }

    console.log(date)

   
    
    return(
        <>
            <div className="post" style={{ padding: 5, border: "2px solid gray" }}>
                <img src={avatar} alt="user profile picture" style={{maxWidth: 250}}/>
                <h1>{username}</h1>
                <h3>{date}</h3>
                <p>{content}</p>
                <button onClick={handleRemove} className="remove">Delete</button>
            </div>
            <br/>
        </>
    )
}

export default Post