import React from 'react'
import './Feed.css'

import MassageSender from './MassageSender'
import StoryReel from './StoryReel'

import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MassageSender />
      <Post
        profilePic="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/83992426_718620235623533_5432283166135913906_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=5N1wV2GrelUAX-_rg2S&_nc_ht=scontent-dfw5-2.xx&oh=483bb805acda4e9bb61744c803342c21&oe=5F716C11"
        message="wow it's nice"
        timestamp="this is a timestamp"
        username="ALi Ip"
        image="https://www.thqnordic.com/sites/default/files/games/slider/backgrounds/Slider_Image_2.png"
      />

      <Post
      // key={id}
      // profilePic={profilePic}
      // message={message}
      // timestamp={timestamp}
      // username={username}
      // image={image}
      />

      <Post />
    </div>
  )
}

export default Feed
