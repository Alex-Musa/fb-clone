/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import './Widgets.css'

function Widgets() {
    return (
        <div className="Widgets">
            <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&amp;tabs=timeline&amp;width=340&amp;height=1500&amp;small_header=false&amp;adapt_container_width=true&amp"
            width="340" 
            height="100%"
            style={{border: "none", overflow: "hidden"}} 
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media">
            </iframe>
            
        </div>
    )
}

export default Widgets
