import React, { useState } from 'react'
import './MassageSender.css'

import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MassageSender() {

    const [input, setInput] = useState("")
    const [imageUrl, setimageUrl] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();

        //  some db stuff

        setInput("")
        setimageUrl("")

    }

    return (
        <div className="massageSender">
            <div className="massageSender__top">
                <Avatar src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/83992426_718620235623533_5432283166135913906_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=5N1wV2GrelUAX-_rg2S&_nc_ht=scontent-dfw5-2.xx&oh=483bb805acda4e9bb61744c803342c21&oe=5F716C11" />
                <form>
                    <input
                        value={input} onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input" type='text' placeholder={`What's on your mind?`} />
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
