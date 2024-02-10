import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import HeaderOptions from './HeaderOptions';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
  return (
    <div className="header">
        
        <div className="header_left">
            <img src="social.png" alt=''/>
            <div className="header_search">
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>
        <div className="header_right">
          <HeaderOptions Icon ={HomeIcon} title='Home'/>
          <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
          <HeaderOptions Icon ={HomeIcon} title='Home'/>
          <HeaderOptions Icon={BusinessCenterIcon} title='Job'/>
          <HeaderOptions Icon ={ChatIcon} title='Messaging'/>
          <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOptions avatar="avatar.jpg"/>
        </div>
</div>
  )
}

export default Header