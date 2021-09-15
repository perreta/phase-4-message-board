import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function ProfileUpdate({user, setUser}){
    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [bio, setBio] = useState('')
    const history = useHistory();

    function onSubmit(e){
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "username": username,
                    "password": password,
                    "profilePicture": profilePicture,
                    "bio": bio
                })
        })
        .then((r) => r.json())
        .then((user) => {
        if (user.errors) {
            setErrors(user.errors)
        } else {
        setUser(user)
        history.push("/profile-edit");
        }
        })
    }


    return(
        <div className="App">
            <form onSubmit={onSubmit}>
                <label>
                    Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <label>
                    Profile Picture
          <input type="text" value={profilePicture} onChange={(e) => setProfilePicture(e.target.value)} />
                </label>
                <br />
                <label>
                    Bio
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
                </label>
                <br />
                <input type="submit" value="Update" />
                {errors.map(error => <div>{error}</div>)}
            </form>

        </div>
    )
}

export default ProfileUpdate;