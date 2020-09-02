import React, { useState, useEffect } from 'react'
import './Feed.css'

import MassageSender from './MassageSender'
import StoryReel from './StoryReel'


import db from "./firebase"

import Post from './Post'

function Feed() {

  // pull Posts from database 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MassageSender />

      {/* showing post from database in page */}

        { posts.map((post) => (

          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        
        ))}

      

    </div>
  )
}

export default Feed
