import React, { useState } from 'react'
import './MassageSender.css'

import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import { useStateValue } from "./StateProvider"

import db from "./firebase"
import firebase from 'firebase'

function MassageSender() {

    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setimageUrl] = useState("")



    const handelSubmit = (e) => {
        e.preventDefault();
        //  send post to database
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("")
        setimageUrl("")
    }

    return (
        <div className="massageSender">
            <div className="massageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input} onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input" type='text' placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input
                        value={imageUrl} onChange={(e) => setimageUrl(e.target.value)}
                    type='text' placeholder="image URL (Optional)"/>
                    <button onClick={handelSubmit}>Hideen submit</button>
                </form>
            </div>

            <div className="massageSender__bottom">

                <div className="massageSender__Option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="massageSender__Option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="massageSender__Option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    )
}

export default MassageSender
