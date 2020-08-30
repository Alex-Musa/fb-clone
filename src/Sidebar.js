import React from 'react';

import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/83992426_718620235623533_5432283166135913906_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=5N1wV2GrelUAX-_rg2S&_nc_ht=scontent-dfw5-2.xx&oh=483bb805acda4e9bb61744c803342c21&oe=5F716C11' title='ALi Ip'/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="More" />
        </div>
    )
}

export default Sidebar
