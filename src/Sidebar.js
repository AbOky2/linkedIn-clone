import React from 'react'
import './Sidebar.css'
import {Avatar} from "@material-ui/core"

function Sidebar() {

    const recentItem = (topic) =>(

        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src='degrader.jpg' alt=""/>
            <Avatar className="sidebar_avatar"/>
            <h2>Abdramane oky</h2>
            <h4>issaokiabderamane@gmail.com</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed</p>
                <p className="sidebar_statNumber">
                    2,555
                </p>
            </div>
            <div className="sidebar_stat">
            <p>Views on post</p>
                <p className="sidebar_statNumber">
                    2,222
                </p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('engineering')}
            {recentItem('designer')}
            {recentItem("dev")}

        </div>
    </div>
  )
}

export default Sidebar